import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-admin-liste',
	templateUrl: './admin-liste.component.html',
	styleUrls: ['./admin-liste.component.css']
})
export class AdminListeComponent implements OnInit {
	varArticleDemande = 1000;
	varMongoDBResultat: Array<any>;
	constructor(
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varMongoDBService: MongoDBService
	) {
		if (this.varNexus.AuthentificationOk == 1) {
			this.varMongoDBService
				.appelNodeJs("/api/touslesarticles")
				.subscribe(res => this.varMongoDBResultat = res)
		}
		else { this.router.navigate(['']); }
	}
	Suppression(reference) {
		this.varArticleDemande = reference;
		if (this.varNexus.methodeEnvoiOrdre == "get") {
			this.varMongoDBService
				.appelNodeJs("/api/suppression/" + this.varArticleDemande)
				.subscribe((res) => {
					this.varMongoDBResultat = res;
					this.varMongoDBService
						.appelNodeJs("/api/touslesarticles")
						.subscribe(res => this.varMongoDBResultat = res);
				});
		}
		else {
			const obj = {reference : reference}
			this.varMongoDBService
				.appelNodeJsPost("/api/suppression", obj)
				.subscribe((res) => {
					this.varMongoDBService
						.appelNodeJs("/api/touslesarticles")
						.subscribe(res => this.varMongoDBResultat = res);
				});
		}
	}
	Editer(reference) {
		console.log("AdminListeComponent : Demande d'édition du N°" + reference);
		this.router.navigate(['miseajour/' + reference]);
	}
	AllerVersAccueil() {
		this.router.navigate(['']);
	}
	ngOnInit() {
	}
}
