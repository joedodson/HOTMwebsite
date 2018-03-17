import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    {url:"/home",text:"Home"},
    {url: "/services", text: "Services"},
    {url: "/products", text: "Products"},
    {url: "/gallery", text: "Gallery"},
    {url: "/about", text: "About Us"},
    {url: "/contact", text: "Contact"}
  ]
  
  navbar = undefined;
  navOffset = undefined;
  menuState = 'in';
  @HostListener('window:scroll', []) onWindowScroll(){
    if(window.pageYOffset >= 25){
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
      elem.setAttribute("style", "background-color: rgba(61, 61, 61, 1); width:290px; height:" + height + "px; right:0; top:0px");
    }
    else{
      elem.setAttribute("style", "width:50px; height:50px; right:15px; top:25px");
    }
    document.getElementById("mbc").classList.toggle("change");
  }

  test(number){
    var items = document.getElementsByClassName("menuitems");
    
  }
  constructor() { }

  ngOnInit() {
    this.navbar = document.getElementsByClassName("header")[0];
    this.navOffset = this.navbar.offsetTop;
  }

}
