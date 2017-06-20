import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-x-scroll',
  templateUrl: './x-scroll.component.html',
  styleUrls: ['./x-scroll.component.css']
})
export class XScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lefterx:number = 0;
  //xxx

  @HostListener('scroll', ['$event'])
  onScroll(event) {
   
    let s = event.target.scrollLeft;
    console.log(s);
    this.lefterx = s;
  }
}
