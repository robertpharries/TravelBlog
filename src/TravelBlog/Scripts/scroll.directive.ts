import { Component, Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Component({})
class Dog {

    @Output() pet = new EventEmitter();

    @HostListener('scroll', ['$event'])
    bark(e) {
        this.pet.emit('woof');
    }
}

@Component({
    selector: 'cont-div',
    template: `
<div style="height: 2000px" >

</div>
`
})

export class ContDiv extends Dog { }


