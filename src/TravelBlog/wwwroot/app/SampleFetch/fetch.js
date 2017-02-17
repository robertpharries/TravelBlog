"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/switchMap");
let FetchDataComponent = class FetchDataComponent {
    constructor(http) {
        this.http = http;
        console.log(this.getUsers());
        this.getUsers().subscribe(data => this.users = data);
    }
    getUsers() {
        console.log(this.http.get('/api/Sample'));
        return this.http.get('/api/Sample/UserDetails').map((res) => res.json());
    }
};
FetchDataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'fetchdata',
        template: `

<table>
    <thead>
        <th>Name</th>
        <th>Email</th>
    </thead>
    <tbody>
        <tr *ngFor="let user of users">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </tbody>
</table>
`
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FetchDataComponent);
exports.FetchDataComponent = FetchDataComponent;
class UserData {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
exports.UserData = UserData;
