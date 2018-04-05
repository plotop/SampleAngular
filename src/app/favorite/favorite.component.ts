import { Component, OnInit, Input,Output,EventEmitter   } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .custom-star1 {
      color: Pink;
  }
  .custom-star {
      color: Green;
  }
    `],
    styleUrls: ['./favorite.component.css']
  
  
})
export class FavoriteComponent  {
 @Input('is-select') isSelect: boolean;
 @Output('onChange') changeEvent=new EventEmitter();
  
  onClick() {
   this.isSelect=!this.isSelect;
   this.changeEvent.emit({newValue:this.isSelect});
   
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
