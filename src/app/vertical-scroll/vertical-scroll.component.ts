import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-vertical-scroll',
  templateUrl: './vertical-scroll.component.html',
  styleUrls: ['./vertical-scroll.component.css']
})
export class VerticalScrollComponent implements OnInit {

  scroller:number = 0;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {    
    //  let s = event.target.scrollTop;    
    // this.scroller = s;
  }

}
