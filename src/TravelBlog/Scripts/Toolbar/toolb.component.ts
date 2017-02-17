import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-tb',
    templateUrl: './toolb.html',
    styleUrls: ['./ToolbarStyleSheet.css']
})

export class ToolbarComponent {
    public checkLogin = (Boolean) => {
        if (localStorage.getItem('currentUser') == null) {
            return false;
        } else {
            return true;
        }
    }
}