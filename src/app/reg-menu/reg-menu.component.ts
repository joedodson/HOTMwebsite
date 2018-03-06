import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reg-menu',
  templateUrl: './reg-menu.component.html',
  styleUrls: ['./reg-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
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
  menuState = 'in';
  @HostListener('window:scroll', []) onWindowScroll(){
    if(window.pageYOffset >= this.navOffset){
      this.navbar.classList.add("sticky");
    }
    else{
      this.navbar.classList.remove("sticky");
    }
  }

  menuClick():void{
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    var elem = document.getElementById("smc");
    if(this.menuState === 'out'){
      var height = window.innerHeight;
      elem.setAttribute("style", "width:300px; height:" + height + "px");
    }
    else{
      elem.setAttribute("style", "width:50px; height:50px");
    }
    document.getElementById("mbc").classList.toggle("change");
  }

  constructor() { 
  }

  ngOnInit() {
    this.navbar = document.getElementById("navbar");
    this.navOffset = this.navbar.offsetTop;
  }

}
