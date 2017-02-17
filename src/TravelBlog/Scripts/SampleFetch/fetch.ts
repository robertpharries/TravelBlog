import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
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
})

export class FetchDataComponent {
    users: Array<UserData>;

    constructor(private http: Http) {
        console.log(this.getUsers());
        this.getUsers().subscribe(data => this.users = data);
    }

    getUsers(): Observable<UserData[]> {
        console.log(this.http.get('/api/Sample'));
        return this.http.get('/api/Sample/UserDetails').map((res: Response) => <UserData[]>res.json());
    }
}

export class UserData {
    constructor(
        public id: number,
        public name: string,
        public email: string ) { }
}