import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
	selector: 'app-article-insertion',
	templateUrl: './article-insertion.component.html',
	styleUrls: ['./article-insertion.component.css']
})
export class ArticleInsertionComponent implements OnInit {
	formInsertion = {
		reference: "JT-" + Date.now(),
		titre: "Titre de remplissage pour rappeler au pigiste de bosser",
		sousTitre: "C'est toujours mieux que de faire les cafés",
		auteur: "Le joker",
		parution: "2018-01-20",
		contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor mollis enim, eget interdum nisi gravida sit amet. Praesent eu porta risus. Fusce eu quam at ipsum viverra rutrum et eu dolor. Fusce libero neque, accumsan at augue luctus, aliquet sagittis nisi. Nam venenatis commodo mauris, sed placerat justo euismod nec. Nunc non lorem est. Ut posuere quam bibendum neque semper, ut eleifend neque venenatis. Pellentesque volutpat velit est, sed volutpat sapien rhoncus non. "
	};

	constructor(
		private varNexus: NexusService,
		private route: ActivatedRoute,
		private router: Router,
		private varMongoDBService: MongoDBService
	) {
		if (this.varNexus.AuthentificationOk == 0) { this.router.navigate(['']); }
	}

	Insertion() {
		const t = this.formInsertion;
		console.log('Nous avons:' + t.titre);
		console.log('Nous avons:' + t.sousTitre);
		console.log('Nous avons:' + t.auteur);
		console.log('Nous avons:' + t.parution);
		console.log('Nous avons:' + t.contenu);

		if (this.varNexus.methodeEnvoiOrdre == "get") {
			this.varMongoDBService
				.appelNodeJs("/api/insertion/" + t.reference + "/" + t.titre + "/" + t.sousTitre + "/" + t.auteur + "/" + t.parution + "/" + t.contenu)
				.subscribe((res) => {
					this.formInsertion = res;
					this.router.navigate(['article/' + t.reference]);
				});
		}
		else {
			console.log(t);
			this.varMongoDBService
				.appelNodeJsPost("/api/insertion", t)
				.subscribe((res) => {
					this.formInsertion = res;
					this.router.navigate(['article/' + t.reference]);
				});
		}
	}
	AllerVersAccueil() {
		this.router.navigate(['']);
	}
	ngOnInit() {
	}

}
