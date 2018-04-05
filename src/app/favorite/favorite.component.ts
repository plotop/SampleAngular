import { Component, OnInit, Input,Output,EventEmitter, ViewEncapsulation   } from '@angular/core';


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
    styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.Native
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
