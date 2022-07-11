import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.css']
})
export class SpiderComponent implements OnInit {

  // @ts-ignore
  @ViewChild('mySpider') mySpiderRef: any;
  private divElement: any;
  @Input() public content:string = "nothing";
  public completed:boolean = false;


  constructor() {
    // @ts-ignore
  }

  ngOnInit(): void {

    // this.animateDiv(this.mySpider)
  }

  ngAfterViewInit() {
    this.divElement = this.mySpiderRef.nativeElement
    this.animateDiv(this.divElement)
  }





  animateDiv(elem: HTMLElement) {

    function moveSpider() {
      let height = window.innerHeight
      let width = window.innerWidth

      let newWidth = (Math.random() * width)
      let newHeight = (Math.random() * height)

      return[newWidth, newHeight];
    }

    var newPosition = moveSpider();
    var left = 0
    var top = 0

    var newRight = 0

    var newLeft = 0
    var intendedDirection = newPosition[0]
    var intendedDirection2 = newPosition[1]

    function linearInterpolate(start: number, end: number, amt: number): number {
      return (1 - amt) * start + amt * end;
    }


    function frame() {
      newLeft = linearInterpolate(newLeft, intendedDirection, 0.03)
      newRight = linearInterpolate(newRight, intendedDirection2, 0.03)
      elem.style.left = newLeft + 'px' // show frames
      elem.style.top = newRight + 'px'

      if(newLeft == intendedDirection && newRight == intendedDirection2)

      newPosition = moveSpider();
      clearInterval(id)
      id = setInterval(frame, 10)

    }
    var id = setInterval(frame, 10) // draw every 10ms
  }

}
