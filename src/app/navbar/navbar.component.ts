import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Title ="Prime";
  menu1="Accueil";
  menu2="Presentation";
  menu3="Services";
  menu4="Produits";
  menu5="Clients";
  menu6="Recrutement";
  menu7="Contact";
  menu8="Assistance";

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  contenueVariable:boolean=true;
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }


}
