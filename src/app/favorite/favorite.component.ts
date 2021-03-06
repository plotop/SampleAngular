import { Component, OnInit, Input,Output,EventEmitter   } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  
})
export class FavoriteComponent implements OnInit {
 @Input('is-select') isSelect: boolean;
 @Output('onChange') changeEvent=new EventEmitter();
  constructor() { 
    
  }
 
  ngOnInit() {
  }
  onClick() {
   this.isSelect=!this.isSelect;
   this.changeEvent.emit({newValue:this.isSelect});
   
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
