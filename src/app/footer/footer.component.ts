import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
