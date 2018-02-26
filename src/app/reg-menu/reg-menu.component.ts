import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-reg-menu',
  templateUrl: './reg-menu.component.html',
  styleUrls: ['./reg-menu.component.scss']
})

export class RegMenuComponent implements OnInit {
  links = [
    {url:"/home",text:"Home"},
    {url: "/services", text: "Services"},
    {url: "/products", text: "Products"},
    {url: "/gallery", text: "Gallery"},
    {url: "/location", text: "Location"},
    {url: "/about", text: "About Us"},
    {url: "/contact", text: "Contact"}
  ]
  
  navbar = undefined;
  navOffset = undefined;
  @HostListener('window:scroll', []) onWindowScroll(){
    if(window.pageYOffset >= this.navOffset){
      this.navbar.classList.add("sticky");
    }
    else{
      this.navbar.classList.remove("sticky");
    }
  }

  constructor() { 
  }

  ngOnInit() {
    this.navbar = document.getElementById("navbar");
    this.navOffset = this.navbar.offsetTop;
  }

}
