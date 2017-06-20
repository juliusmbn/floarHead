import { Component, OnInit,HostListener,HostBinding } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  scroller:number = 0;
  lefterx:number = 0;
  //xxx

  @HostListener('scroll', ['$event'])
  onScroll(event) {
   
    let s = event.target.scrollLeft;
    console.log(s);
    this.lefterx = s;
  }
}
