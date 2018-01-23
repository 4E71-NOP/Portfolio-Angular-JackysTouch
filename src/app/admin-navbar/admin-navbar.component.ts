import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NexusService } from '../_LocalServices/nexus.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
		private varNexusService: NexusService,
		private route: ActivatedRoute,
		private router: Router,
    
  ) { }

  ngOnInit() {
  }

	AllerVersInsertion() {
		this.router.navigate(['insertion']);
	}
	AllerVersAdmin() {
		this.router.navigate(['admin']);
	}
	Deconnexion(){
		this.varNexusService.Deconnexion();
		this.router.navigate(['']);
	}

}
