import { Injectable } from '@angular/core';

@Injectable()
export class NexusService {
	AuthentificationOk = 0;
	Utilisateur = {
		identifiant:"",
		prenom:"",
		nom:"",
		niveau:""
	};
	methodeEnvoiOrdre = "post";

	constructor() { }
	Deconnexion() { 
		this.AuthentificationOk = 0; 
		this.Utilisateur.identifiant ="";
		this.Utilisateur.prenom ="";
		this.Utilisateur.nom ="";
		this.Utilisateur.niveau ="";
	}
	BasculeMethodEnvoiOrdre (){
		this.methodeEnvoiOrdre = ( this.methodeEnvoiOrdre == "post") ? this.methodeEnvoiOrdre = "get" : this.methodeEnvoiOrdre = "post";
	}
}
