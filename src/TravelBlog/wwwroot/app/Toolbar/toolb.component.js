"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.checkLogin = (Boolean) => {
            if (localStorage.getItem('currentUser') == null) {
                return false;
            }
            else {
                return true;
            }
        };
    }
};
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-tb',
        templateUrl: './toolb.html',
        styleUrls: ['./ToolbarStyleSheet.css']
    })
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
