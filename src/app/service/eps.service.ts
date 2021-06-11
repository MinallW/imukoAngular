import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class EpsService{
    constructor(
	private http: HttpClient
    ) { }

    getPersons(): any {
	return this.http.get("http://localhost:3000/personas");
    }

    addPersons(form): any {
	return this.http.post("http://localhost:3000/personas", form);
    }

}
