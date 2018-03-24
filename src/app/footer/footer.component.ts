import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links =[
    {url:"/home", text:"Home"},
    {url:"/services", text:"Services"},
    {url:"/products", text:"Products"},
    {url:"/gallery", text:"Gallery"},
    {url:"/contact", text:"Schedule an Appointment"},
    {url:"/location", text:"Location"},
    {url:"/about", text:"About Us"},
    {url:"/contact", text:"Contact"},
    {url:"/contact", text:"Get a Quote"},
    {url:"/products", text:"Search by Vehicle"}
  ]

  width = window.innerWidth;

  @HostListener('window:resize', []) onWindowResize(){
    var width = window.innerWidth;
    if(width < 1200) document.getElementById("vs1").className = "hspacer";
    else document.getElementById("vs1").className = "vspacer";

    if(width < 850) document.getElementById("vs3").className = "hspacer";
    else document.getElementById("vs3").className = "vspacer";

    if(width < 650) document.getElementById("vs2").className = "hspacer";
    else document.getElementById("vs2").className = "vspacer";
  }
  
  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

}
