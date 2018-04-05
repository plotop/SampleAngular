import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    {{course.title | uppercase}} <br/>
    {{course.rating | number:'2.1-1'}} <br/>
    {{course.students | number}} <br/>
    {{course.price | currency:'AUD':symbol:'3.2-2'}} <br/>
    {{course.releaseDate | date:'shortDate'}} <br/>
    `
})
export class CoursesComponent {
    course = {
        title: 'The Complete Angular Course',
        rating: 4.975,
        students: 20123,
        price: 190.25,
        releaseDate: new Date(2016, 3, 1)
    };

   }
