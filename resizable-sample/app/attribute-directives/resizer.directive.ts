import {Directive, ElementRef, Input} from 'angular2/core';
import {Renderer} from 'angular2/core';
import {HostListener} from 'angular2/core';

@Directive({
  selector: '[jmResizer]',
  host: {
    '(mousedown)': '_onMouseDown($event)',
    '(window:mouseup)': '_onMouseUp()',
    '(body:mousemove)': '_onMouseMove($event)'
  }
})

export class ResizerDirective {
  _resizerHeight: number;
  _resizerTop: string;
  _resizerBottom: string;
  _resizerWidth: number;
  _resizerLeft: string;
  _resizerRight: string;
  _mouseDown:boolean = false;

  constructor(private _elemRef: ElementRef) {}

  @Input() set resizerHeight(resizerHeight: number){
    this._resizerHeight = resizerHeight || this._resizerHeight;
  }

  @Input() set resizerTop(resizerTop: string) {
    this._resizerTop = resizerTop || this._resizerTop;
  }

  @Input() set resizerBottom(resizerBottom: string) {
    this._resizerBottom = resizerBottom || this._resizerBottom;
  }

  @Input() set resizerWidth(resizerWidth: number) {
    this._resizerWidth = resizerWidth || this._resizerWidth
  }

  @Input() set resizerLeft(resizerLeft: string) {
    this._resizerLeft = resizerLeft || this._resizerLeft
  }

  @Input() set resizerRight(resizerRight: string) {
    this._resizerRight = resizerRight || this._resizerRight
  }

  _onMouseDown(e: any) {
    console.log('Mouse Down.');
    e.preventDefault();
    this._mouseDown = true;
  }

  _onMouseUp() {
    this._mouseDown = false;
    console.log('Mouse Up.');
  }

  _onMouseMove(e: any) {
    if(this._mouseDown){
      console.log('Mouse move.');
      //var refPos = this._elemRef.nativeElement.getBoundingClientRect();
      //e.preventDefault();
      var posX = e.pageX;
      var docWidth = document.body.clientWidth;
      //var posY = e.clientY;

      if(!(posX < 50 || posX > (docWidth - 50))){
        this._elemRef.nativeElement.style.left = (posX) + 'px';
        document.getElementById(this._resizerLeft).style.width = (posX) + 'px';
        document.getElementById(this._resizerRight).style.left = (posX + this._resizerWidth) + 'px';
      }



      //console.log(posX);
      //console.log(e.type);
    }
  }
}
