import { Component, OnInit, HostListener } from '@angular/core';
import { EventEmitter } from 'protractor';
import { PagevisitService } from '../pagevisit.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  parts = [
    "aeromotive.gif","arp.gif","b&b.gif","belltech.gif",
    "compcam.gif","edelbrock.gif","flowmaster.gif","hedmanhus.gif",
    "hughes.gif","jegs.gif","motivegear.gif","stefs.gif"
  ]

  makes = [
    "acura.png","audi.png","bmw.png","chevy.png",
    "dodge.png","ford.png","gmc.png","lexus.png"
  ]

  repairs = [
    {url:"maintenance.png",title:"Maintenance",text:"Oil Changes, Tune-Ups, Belts, Hoses, Fluids and Filter Replacements"},
    {url:"engine.png",title:"Engine",text:"Engine Repair, Engine Replacements, New & Rebuilt Engines, Advanced Diagnostics"},
    {url:"transmission.png",title:"Transmission",text:"Automatic & Manual Transmission Service & Repairs, Clutches, Fluid Exchanges"},
    {url:"brakes.png",title:"Brakes",text:"Brake Repairs, Brake Inspections, Disc Brakes, Drum Brakes, ABS System Repair, Brake Fluid Replacement"},
    {url:"suspension.png",title:"Suspension",text:"4 Wheel Alignments, Shocks and Struts, Suspension and Ride diagnostics, CV Joints"},
    {url:"exhaust.png",title:"Exhaust",text:"Smog Repairs, Catalytic Converter, Muffler, Exhaust Service, Emissions Repairs"},
    {url:"tires.png",title:"Tires",text:"New Tires for Passenger Cars, SUVs, Light Trucks, Medium Duty Trucks, Wheels"},
    {url:"acservice.png",title:"A/C Service",text:"Air Conditioning Repairs, AC Service, Cabin Air Filter Replacement, AC Diagnostics"}
  ]

  reviews = [
    {name:"John Wilburn",car:"2007 Mustang",text:"Great shop! They have the things you need to be competitive wether it’s in show or racing! Had them do my dyno tunes on my Honda Prelude BB6 chassis with a closed deck H22a."},
    {name:"Sally Speeder",car:"2010 Charger",text:"Had my integra tuned here, sam is by far the nicest guy. Let me know what was going on with my tune. Very knowledgeable."},
    {name:"Jack Fire",car:"2000 Cobra",text:"Some of the best customer service in the area. Andrew was a big help through my tuning process. We ran into some heating issues and they were able to get it taken care of fast and correctly and at a great price."},
    {name:"Sam Turbo",car:"1969 Corvette",text:"Sam has worked on many of my family members vehicles as well as mine. They do the work you request and can help you diagnose what needs to be done if you can't. Cheers!"}
  ]

  total = 0;

  animatedElements = [];

  visited = this.pvs.checkVisited();
  
  @HostListener('window:scroll', []) onWindowScroll(){
    console.log(window.scrollY);
    if(!this.visited) this.checkForAnimations();
  }

  //if element is within view, start animation on all elements in ctnr
  checkForAnimations(){
    for(var elem = 0; elem < this.animatedElements.length; ++elem){
      if(this.isInViewport(this.animatedElements[elem])){
        var children = this.animatedElements[elem].element.getElementsByClassName("animated");
        for(var child = 0; child < children.length; ++child){
          children[child].classList.add("start");
        }
      }
    }
  }

  //gets all containers that have animated elements, to check on scroll
  initElements(){
    if(!this.visited){
      var elements = document.getElementsByClassName("animated-ctnr");
      for(var elem = 0; elem < elements.length; ++elem){
        var rect1 = elements[elem].getBoundingClientRect();
        this.animatedElements.push({element:elements[elem], 
          top:rect1.top + window.scrollY, bottom:rect1.top+window.scrollY+rect1.height,
        rect: rect1})
      }
      this.checkForAnimations();
    }

    //only animate buttons on bottom if page has been visited
    else{
      var elements = document.getElementsByClassName("animated");
      for(var elem = 0; elem < elements.length; ++elem){
        elements[elem].classList.add("start");
        if(elements[elem].classList.contains("pulse")){
          elements[elem].setAttribute("style","animation-delay:0s;");
        }
        else{
          elements[elem].setAttribute("style","animation-duration:0s; animation-delay:0s;");
        }
      }
    }
  }

  //determines if element is within view to begin animation
  isInViewport(elem):boolean{
    var windHeight = window.innerHeight;
    var top = window.scrollY;
    var bottom = top + windHeight;

    if(elem.rect.height/windHeight > .8){
      return(elem.top <= windHeight*.85 + top && elem.bottom > top);
    }
    else return (elem.top <= windHeight*.6 + top && elem.bottom > top);
  }

  constructor(private pvs: PagevisitService) {}

  ngOnInit() {
    setTimeout(function(){
      this.initElements();
    }.bind(this),0);
  }

}
