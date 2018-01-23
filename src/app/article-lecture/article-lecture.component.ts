import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-article-lecture',
	templateUrl: './article-lecture.component.html',
	styleUrls: ['./article-lecture.component.css']
	})
	export class ArticleLectureComponent implements OnInit {
	varMongoDBResultat : Array<any>;
	varArticleDemande = 10;		//fake value

	constructor (
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varMongoDBService:MongoDBService
	) { 
		this.varArticleDemande = this.route.snapshot.params['reference'];
		this.varMongoDBService.appelNodeJs("/api/article/"+this.varArticleDemande).subscribe(res => this.varMongoDBResultat = res)
	}

	AllerVersEdition(reference) {
		this.router.navigate(['miseajour/'+reference]);
	}
	AllerVersSuppression(reference) {
		this.router.navigate(['suppression/'+reference]);
	}
	
	AllerVersAccueil() {
		this.router.navigate(['']);
	}
	ngOnInit () {
		console.log('Article demandé:' +this.varArticleDemande);
	}
}



