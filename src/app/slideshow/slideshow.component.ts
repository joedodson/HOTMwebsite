import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  INTERVAL = 3000;
  slides = [
    {name:"image1", src:"../../assets/carss1.jpg"},
    {name:"image2", src:"../../assets/carss2.jpg"},
    {name:"image3", src:"../../assets/carss3.jpg"}
  ];
  currentIndex = 0;
  timeoutRef = undefined;

  isCurrentSlide(index):boolean{
    return this.currentIndex === index;
  }

  nextSlide():void{
    if(this.currentIndex === this.slides.length-1) this.currentIndex = 0;
    else this.currentIndex++;
    this.updateDots();
    this.resetScroll();
  }
  
  prevSlide():void{
    if(this.currentIndex === 0) this.currentIndex = this.slides.length-1;
    else this.currentIndex--;
    this.updateDots();
    this.resetScroll();
  }

  setSlide(index):void{
    this.currentIndex = index;
    this.updateDots();
  }

  updateDots():void{
    var x = document.getElementsByClassName("dot");
    for(var i=0;i<x.length;++i){
      if(i == this.currentIndex) x[i].id = "active";
      else x[i].id = "";
    }
  }

  autoScroll():void{
    this.timeoutRef = setTimeout(function(){
                        this.nextSlide();
                        }.bind(this),this.INTERVAL);
  }

  resetScroll():void{
    clearTimeout(this.timeoutRef);
    this.autoScroll();
  }

  constructor() { }

  ngOnInit() {
    document.getElementsByClassName("dot")[0].id = "active";
    this.autoScroll();
  }

}
