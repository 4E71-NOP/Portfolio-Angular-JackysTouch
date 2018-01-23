import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-article-mise-ajour',
	templateUrl: './article-mise-ajour.component.html',
	styleUrls: ['./article-mise-ajour.component.css']
})
export class ArticleMiseAjourComponent implements OnInit {
	varMongoDBResultat: Array<any>;
	varArticleDemande = 10;														//Valeur factice

	constructor(
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varMongoDBService: MongoDBService
	) {
		if (this.varNexus.AuthentificationOk == 1) {
			this.varArticleDemande = this.route.snapshot.params['reference'];
			this.varMongoDBService
				.appelNodeJs("/api/article/" + this.varArticleDemande)
				.subscribe(res => this.varMongoDBResultat = res);
		}
		else { this.router.navigate(['']); }

	}
	ngOnInit() {
		console.log('Article demandé:' + this.varArticleDemande);
	}
	MiseAJour() {
		const t = this.varMongoDBResultat[0];
		console.log('Nous avons:' + t.titre);
		console.log('Nous avons:' + t.sousTitre);
		console.log('Nous avons:' + t.auteur);
		console.log('Nous avons:' + t.parution);
		console.log('Nous avons:' + t.contenu);

		if (this.varNexus.methodeEnvoiOrdre == "get") {
			this.varMongoDBService
				.appelNodeJs("/api/modification/" + t.reference + "/" + t.titre + "/" + t.sousTitre + "/" + t.auteur + "/" + t.parution + "/" + t.contenu)
				.subscribe((res) => {
					this.varMongoDBResultat = res;
					this.router.navigate(['article/' + this.varArticleDemande]);
				});
		}

		else {
			this.varMongoDBService
				.appelNodeJsPost("/api/modification", t)
				.subscribe((res) => {
					this.varMongoDBResultat = res;
					this.router.navigate(['article/' + this.varArticleDemande]);
				});
		}
		console.log(t);
	}

	AllerVersLecture() {
		this.router.navigate(['article/' + this.varArticleDemande]);
	}

	AllerVersAccueil() {
		this.router.navigate(['']);
	}

}



