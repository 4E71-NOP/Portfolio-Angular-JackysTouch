import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

//----------------------------------------
// Services
import { HttpModule } from "@angular/http";
import { MongoDBService } from './_LocalServices/data.service';
import { NexusService } from './_LocalServices/nexus.service';

//----------------------------------------
// Pages
import { ArticleListeComponent } from './article-liste/article-liste.component';
import { ArticleLectureComponent } from './article-lecture/article-lecture.component';
import { ArticleInsertionComponent } from './article-insertion/article-insertion.component';
import { ArticleMiseAjourComponent } from './article-mise-ajour/article-mise-ajour.component';
import { ArticleSuppressionComponent } from './article-suppression/article-suppression.component';
import { AdminListeComponent } from './admin-liste/admin-liste.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpecialFreshJackiesComponent } from './special-fresh-jackies/special-fresh-jackies.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

const TableRoutes: Routes = [
	{path: 'admin',						component: AdminListeComponent},
	{path: 'article/:reference',		component: ArticleLectureComponent},
	{path: 'insertion',					component: ArticleInsertionComponent},
	{path: 'miseajour/:reference',		component: ArticleMiseAjourComponent},
	{path: 'suppression/:reference',	component: ArticleSuppressionComponent},
	{path: 'freshJackies',				component: SpecialFreshJackiesComponent},
	{path: 'authentification',			component: AuthentificationComponent},
	{path: '',							component: ArticleListeComponent},
];

@NgModule({
	declarations: [
		AppComponent,
		ArticleLectureComponent,
		ArticleInsertionComponent,
		ArticleMiseAjourComponent,
		ArticleSuppressionComponent,
		ArticleListeComponent,
		AdminListeComponent,
		NavbarComponent,
		SpecialFreshJackiesComponent,
		AuthentificationComponent,
		AdminNavbarComponent
		
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(TableRoutes),
		FormsModule
	],
	providers: [
		MongoDBService,
		NexusService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

