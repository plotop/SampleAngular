import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> !-->
    <!-- <button [style.backgroundColor]="isActive ? 'blue' : 'white'" >Save</button>
    <div (click)="onDivClicked()">
    <button (click)="onSave($event)"> Save </button>
    </div> !-->
    <!-- <input (keyup)="onKeyUp($event)"/>
    <input (keyup.enter)="onKeyUp()"/>
    <input (keyup.enter)="onKeyUp($event)"/>
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
    <input [value]="email" (keyup.enter)="onKeyUp()"/>
    <input [value]="email" (keyup.enter)=" email = $event.target.value; onKeyUp()"/>!-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class Courses1Component {
    // isActive = true;
    email = 'me@example.com';
    onKeyUp() {

           // console.log($event.target.value);
           console.log(this.email);

    }

    onSave($event) {
        $event.stopPropagation();
        console.log('Button was Clicked', $event);
    }
    onDivClicked() {
        console.log('Div was Clicked');
    }

   }
