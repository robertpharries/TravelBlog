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
let Dog = class Dog {
    constructor() {
        this.pet = new core_1.EventEmitter();
    }
    bark(e) {
        this.pet.emit('woof');
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Dog.prototype, "pet", void 0);
__decorate([
    core_1.HostListener('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Dog.prototype, "bark", null);
Dog = __decorate([
    core_1.Component({})
], Dog);
let ContDiv = class ContDiv extends Dog {
};
ContDiv = __decorate([
    core_1.Component({
        selector: 'cont-div',
        template: `
<div style="height: 2000px" >

</div>
`
    })
], ContDiv);
exports.ContDiv = ContDiv;
