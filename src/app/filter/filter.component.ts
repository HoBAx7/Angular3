import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') all: number= 0;
  @Input() free: number= 0;
  @Input() premium: number= 0;

  
  // selectedValueButton: string= 'all'
  @Output() 
  selectedButton: EventEmitter<string> = new EventEmitter<string>();
  // isBtnActive: string = 'all';

  isValue: string = 'all';  // This is a class property. By initializing with a value, you can set the default button highlighted

toggle1() {
   this.isValue = 'all';
   this.selectedButton.emit(this.isValue);
  }
toggle2() {
   this.isValue = 'free';
   this.selectedButton.emit(this.isValue);
  }
toggle3() {
   this.isValue = 'premium'; 
   this.selectedButton.emit(this.isValue);
}
  
}
