import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-article-suppression',
	templateUrl: './article-suppression.component.html',
	styleUrls: ['./article-suppression.component.css']
})
export class ArticleSuppressionComponent implements OnInit {
	varMongoDBResultat: Array<any>;
	varArticleDemande = 10;		//fake value

	constructor(
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varMongoDBService: MongoDBService
	) {
		if (this.varNexus.AuthentificationOk == 1) {
			this.varArticleDemande = this.route.snapshot.params['reference'];
		}
		else { this.router.navigate(['']); }
	}

	ngOnInit() {
		console.log('Article demandé:' + this.varArticleDemande);
	}
	Suppression(reference) {
		if (this.varNexus.methodeEnvoiOrdre == "get") {
			this.varMongoDBService
				.appelNodeJs("/api/suppression/" + reference)
				.subscribe( ( res )  => {
					this.varMongoDBResultat = res;
					this.router.navigate(['']);
				});
		}
		else {
			const obj = {reference : reference}
			this.varMongoDBService
				.appelNodeJsPost("/api/suppression", obj)
				.subscribe((res) => {
					this.varMongoDBResultat = res;
					this.router.navigate(['']);
				});
		}
	}
	AllerVersAccueil() {
		this.router.navigate(['']);
	}
}



