import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string='';
  @Output()
  searchTxtChanged :EventEmitter<string> = new EventEmitter();
  // changeSearchValue(eventData: Event){
  //   console.log((<HTMLInputElement>eventData.target).value);
  //   this.searchValue = (<HTMLInputElement>eventData.target).value;
  // }
  onSearchInputCgange(){
    this.searchTxtChanged.emit(this.searchValue);
  }
}
