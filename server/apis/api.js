const express = require('express');
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CnxDB = (closure) => {
	var BddUrl = "mongodb://localhost:27017";
	return MongoClient.connect(BddUrl, (err, db) => {
		console.log("Connexion BDD : " + BddUrl);
		if (err) { console.log("Erreur de connexion à la BDD:" + BddUrl + "\n" + err); }
		closure(db);
	});
};

const sendError = (err, res) => {
	console.log("SendError: " + response);
	response.status = 501;
	response.message = (typeof err == 'object') ? err.message : err;
	res.status(501).json(response);
};

let response = {
	status: 200,
	data: [],
	message: null
};


//----------------------------------------
//
//
//  Route pour l'authentification'
//
//
router.get("/authentification/:id/:mdp", (req, res) => {
	const varId = req.params.id;
	const varMdp = req.params.mdp;
	console.log("----------------------------------------\n\nRoute GET : API/authentification");
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("utilisateurs")
			.find({ identifiant: varId, motDePasse: varMdp })
			.toArray((err, authentification) => {
				if (err) { sendError(err); }
				if (authentification.length == 0) { res.json({ "status": 200, "data": [{ "reponse": "CNX-KO" }] }); }
				if (authentification.length > 0) { res.json({ "status": 200, "data": [{ "reponse": "CNX-OK", authentification }] }); }
			});
		
	});
});


//----------------------------------------
//
//
//  Route pour la lecture simple
//
//
router.get("/touslesarticles", (req, res) => {
	console.log("----------------------------------------\n\nRoute GET : API/touslesarticles");
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.find({}, { _id: 0, parution: 1, auteur: 1, reference: 1, titre: 1, sousTitre: 1, contenu: 0 })
			.sort({ parution: -1 })
			.toArray()
			.then((donnees) => {
				response.data = donnees;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
});

router.get("/article/:article", (req, res) => {
	const varArticle = req.params.article;
	console.log("----------------------------------------\n\nRoute GET : API/article/" + varArticle);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.find({ "reference": { $eq: varArticle } })
			.toArray()
			.then((donnees) => {
				response.data = donnees;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
});


//----------------------------------------
//
//
//  Route pour la modification
//
//
router.get("/modification/:reference/:titre/:sousTitre/:auteur/:parution/:contenu", (req, res) => {
	const post = {
		Reference : req.params.reference,
		Titre : req.params.titre,
		SousTitre : req.params.sousTitre,
		Auteur : req.params.auteur,
		Parution : req.params.parution,
		Contenu : req.params.contenu
		}

	console.log("----------------------------------------\n\nRoute GET : API/modification/" + post.Reference);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.update(
				{ reference: post.Reference },
				{ $set: { titre: post.Titre, sousTitre: post.SousTitre, auteur: post.Auteur, parution: post.Parution, contenu: post.Contenu } }, (err) => { 
					res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
				);
	});
});

router.post("/modification", (req, res) => {
	const post = {
	Reference : req.body.reference,
	Titre : req.body.titre,
	SousTitre : req.body.sousTitre,
	Auteur : req.body.auteur,
	Parution : req.body.parution,
	Contenu : req.body.contenu
	}

	console.log("----------------------------------------\n\nRoute POST : API/modification/" + post.Reference);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.update(
			{ reference: post.Reference },
			{ $set: { titre: post.Titre, sousTitre: post.SousTitre, auteur: post.Auteur, parution: post.Parution, contenu: post.Contenu } }, (err) => { 
				res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
			);
	});
});

//----------------------------------------
//
//
//  Route pour l'insertion
//
//
router.get("/insertion/:reference/:titre/:sousTitre/:auteur/:parution/:contenu", (req, res) => {
	const post = {
		Reference : req.params.reference,
		Titre : req.params.titre,
		SousTitre : req.params.sousTitre,
		Auteur : req.params.auteur,
		Parution : req.params.parution,
		Contenu : req.params.contenu
	}

	console.log("----------------------------------------\n\nRoute GET : API/insertion/" + post.Reference);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.insert(
				{ reference: post.Reference, titre: post.Titre, sousTitre: post.SousTitre, auteur: post.Auteur, parution: post.Parution, contenu: post.Contenu }, (err) => { 
					res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
			);
	});
});

router.post("/insertion", (req, res) => {
	const post = {
		Reference : req.body.reference,
		Titre : req.body.titre,
		SousTitre : req.body.sousTitre,
		Auteur : req.body.auteur,
		Parution : req.body.parution,
		Contenu : req.body.contenu
		}
	
	console.log("----------------------------------------\n\nRoute POST : API/insertion/" + post.Reference);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles")
			.insert(
			{ reference: post.Reference, titre: post.Titre, sousTitre: post.SousTitre, auteur: post.Auteur, parution: post.Parution, contenu: post.Contenu }, (err) => { 
				res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
			);
	});
});


//----------------------------------------
//
//
//  Route pour la suppression
//
//
// L'appel vient d'une requete Xhttp d'Angular. Il faut donc un GET.
router.get("/suppression/:article", (req, res) => {
	const varArticle = req.params.article;
	console.log("----------------------------------------\n\nRoute GET : API/suppression/" + varArticle);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles").remove({ "reference": { $eq: varArticle } }, (err, result) => {
			if (err) { sendError(err, result); }
			else {res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
		})
	});
});

router.post("/suppression", (req, res) => {
	const post = { varArticle : req.body.reference };
	console.log("----------------------------------------\n\nRoute POST : API/suppression/" + post.varArticle);
	CnxDB((db) => {
		var db = db.db("blogfactice");
		db.collection("articles").remove({ "reference": { $eq: post.varArticle } }, (err, result) => {
			if (err) { sendError(err, result); }
			else {res.json({ "status": 200, "data": [{ "reponse": "Execution lancée" }] });}
		})
	});
});

//----------------------------------------
// Exports (hypra important)
module.exports = router;

