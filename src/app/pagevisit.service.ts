import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PagevisitService {

  router;
  visited = {
    '/home':false,
    '/services':false,
    '/products':false,
    '/gallery':false,
    '/about':false,
    '/contact':false,
  };

  checkVisited():boolean{
    var url = this.router.url;
    if(!this.visited[url]){
      this.visited[url] = true;
      return false
    }
    else return true;
  }

  constructor(private _router:Router) {
    this.router = _router;
  }

}
