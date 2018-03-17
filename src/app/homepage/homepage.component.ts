import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  parts = ["aeromotive.gif","arp.gif","b&b.gif","belltech.gif",
          "compcam.gif","edelbrock.gif","flowmaster.gif","hedmanhus.gif",
          "hughes.gif","jegs.gif","motivegear.gif","stefs.gif"]

  makes = ["acura.png","audi.png","bmw.png","chevy.png",
          "dodge.png","ford.png","gmc.png","lexus.png"]

  repairs = [{url:"maintenance.png",title:"Maintenance",text:"Oil Changes, Tune-Ups, Belts, Hoses, Fluids and Filter Replacements"},
  {url:"engine.png",title:"Engine",text:"Engine Repair, Engine Replacements, New & Rebuilt Engines, Advanced Diagnostics"},
  {url:"transmission.png",title:"Transmission",text:"Automatic & Manual Transmission Service & Repairs, Clutches, Fluid Exchanges"},
  {url:"brakes.png",title:"Brakes",text:"Brake Repairs, Brake Inspections, Disc Brakes, Drum Brakes, ABS System Repair, Brake Fluid Replacement"},
  {url:"suspension.png",title:"Suspension",text:"4 Wheel Alignments, Shocks and Struts, Suspension and Ride diagnostics, CV Joints"},
  {url:"exhaust.png",title:"Exhaust",text:"Smog Repairs, Catalytic Converter, Muffler, Exhaust Service, Emissions Repairs"},
  {url:"tires.png",title:"Tires",text:"New Tires for Passenger Cars, SUVs, Light Trucks, Medium Duty Trucks, Wheels"},
  {url:"acservice.png",title:"A/C Service",text:"Air Conditioning Repairs, AC Service, Cabin Air Filter Replacement, AC Diagnostics"}]
  
  constructor() { }

  ngOnInit() {
  }

}
