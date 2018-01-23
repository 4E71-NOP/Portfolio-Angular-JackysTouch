import { Component } from '@angular/core';
import { NexusService } from './_LocalServices/nexus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	varTitle = "Jackys Touch";

	constructor(
		// private varNexus: NexusService,
		public varNexus: NexusService,
		public route: ActivatedRoute,
		public router: Router,
	) {	}
	allerVersAuthentification() {
		this.router.navigate(['authentification']);
	}
}
