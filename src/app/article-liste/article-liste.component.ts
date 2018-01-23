import { Component, OnInit } from '@angular/core';
import { MongoDBService } from '../_LocalServices/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.css']
})
export class ArticleListeComponent implements OnInit {
  varMongoDBResultat: Array<any>;
  constructor(
		private route: ActivatedRoute,
		private router: Router,
    private varDataService: MongoDBService
  ) {
    this.varDataService.appelNodeJs("/api/touslesarticles")
    .subscribe(res => this.varMongoDBResultat = res)
  }

  ngOnInit() {
  }
}
