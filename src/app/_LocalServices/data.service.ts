import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MongoDBService {
result: any ;
	constructor( private VarHttp:Http) { }
	appelNodeJs(route:string) {
		return this.VarHttp.get("http://localhost:8080" + route)
		.map(result => this.result = result.json().data);
	}
	appelNodeJsPost(route:string, obj) {
		return this.VarHttp.post("http://localhost:8080" + route, obj)
		.map(result => this.result = result.json().data);
	}
}

