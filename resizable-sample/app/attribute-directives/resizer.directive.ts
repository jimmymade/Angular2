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

      var posX = e.pageX;
      var posY = window.innerHeight - e.pageY;
      //var topLimit = document.getElementById(this._resizerTop).offsetHeight
      //var bottomLimit = document.getElementById(this._resizerBottom).offsetHeight
      var docWidth = document.body.clientWidth;
      //console.log('Top Content Height: ' + topLimit);
      //console.log('Bottom Content Height: ' + bottomLimit);
      //console.log('Window inner height: ' + window.innerHeight);

      //console.log(posY);
      if(this._resizerTop != null && this._resizerBottom != null) {
        this._elemRef.nativeElement.style.bottom = posY + 'px';
        document.getElementById(this._resizerTop)
                            .style.bottom = (posY + this._resizerWidth) + 'px';
        document.getElementById(this._resizerBottom)
                            .style.height = (posY) + 'px';
      }

      if(!(posX < 50 || posX > (docWidth - 50))
          && this._resizerLeft != null && this._resizerRight != null){
        this._elemRef.nativeElement.style.left = (posX) + 'px';
        document.getElementById(this._resizerLeft)
                            .style.width = (posX) + 'px';
        document.getElementById(this._resizerRight)
                            .style.left = (posX + this._resizerWidth) + 'px';

      }
    }
  }
}
