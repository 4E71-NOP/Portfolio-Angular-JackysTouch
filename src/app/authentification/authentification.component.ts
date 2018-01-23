import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongoDBService } from '../_LocalServices/data.service';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-authentification',
	templateUrl: './authentification.component.html',
	styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
	credences = {
		identifiant: '',
		motDePasse: ''
	};
	score = 0;
	varMessage = "";

	constructor(
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varDataService: MongoDBService
	) { }

	ngOnInit() {
	}

	ControleAthentification() {
		this.varMessage = "Controle en cours...";
		this.score = 0;
		if ( this.credences.identifiant.length > 0 ) { this.score++; }
		if ( this.credences.motDePasse.length > 0 ) { this.score++; }
		if ( this.score == 2 ) {
			this.varDataService.appelNodeJs("/api/authentification/"+this.credences.identifiant+"/"+this.credences.motDePasse)
			.subscribe( (res) => {
				if ( res[0].reponse == "CNX-OK") { 
					const p = this.varNexus;
					const auth = res[0].authentification[0];
					p.AuthentificationOk = 1;
					p.Utilisateur.identifiant = auth.identifiant;
					p.Utilisateur.prenom = auth.prenom;
					p.Utilisateur.nom = auth.nom;
					p.Utilisateur.niveau = auth.niveau;
					this.varMessage = "Connexion réussie!";
					this.router.navigate(['']);
				}
				if ( res[0].reponse == "CNX-KO") { 
					this.varMessage = "Echec de la connexion!";
				}
			});
		}
		else {
			this.varMessage = "Il faut inscrire vos identifiants dans les champs!";
		}
	}
}
