import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {

  }
  slogan: string='your one stop shop for everthing';
  source: string='/assets/shop.jpg'
  getSlogan(){
    return'that is a new slogan';
  }
}
