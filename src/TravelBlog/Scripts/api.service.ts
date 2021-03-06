﻿import "rxjs/Rx"
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    get(onNext: (json: any) => void) {
        this.http.get("api/Sample/UserDetails").map(response => response.json()).subscribe(onNext);
    }
}