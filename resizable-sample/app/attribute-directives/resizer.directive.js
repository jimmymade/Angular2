System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ResizerDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ResizerDirective = (function () {
                function ResizerDirective(_elemRef) {
                    this._elemRef = _elemRef;
                    this._mouseDown = false;
                }
                Object.defineProperty(ResizerDirective.prototype, "resizerHeight", {
                    set: function (resizerHeight) {
                        this._resizerHeight = resizerHeight || this._resizerHeight;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizerDirective.prototype, "resizerTop", {
                    set: function (resizerTop) {
                        this._resizerTop = resizerTop || this._resizerTop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizerDirective.prototype, "resizerBottom", {
                    set: function (resizerBottom) {
                        this._resizerBottom = resizerBottom || this._resizerBottom;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizerDirective.prototype, "resizerWidth", {
                    set: function (resizerWidth) {
                        this._resizerWidth = resizerWidth || this._resizerWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizerDirective.prototype, "resizerLeft", {
                    set: function (resizerLeft) {
                        this._resizerLeft = resizerLeft || this._resizerLeft;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizerDirective.prototype, "resizerRight", {
                    set: function (resizerRight) {
                        this._resizerRight = resizerRight || this._resizerRight;
                    },
                    enumerable: true,
                    configurable: true
                });
                ResizerDirective.prototype._onMouseDown = function (e) {
                    console.log('Mouse Down.');
                    e.preventDefault();
                    this._mouseDown = true;
                };
                ResizerDirective.prototype._onMouseUp = function () {
                    this._mouseDown = false;
                    console.log('Mouse Up.');
                };
                ResizerDirective.prototype._onMouseMove = function (e) {
                    if (this._mouseDown) {
                        console.log('Mouse move.');
                        //var refPos = this._elemRef.nativeElement.getBoundingClientRect();
                        //e.preventDefault();
                        var posX = e.pageX;
                        var docWidth = document.body.clientWidth;
                        //var posY = e.clientY;
                        if (!(posX < 50 || posX > (docWidth - 50))) {
                            this._elemRef.nativeElement.style.left = (posX) + 'px';
                            document.getElementById(this._resizerLeft).style.width = (posX) + 'px';
                            document.getElementById(this._resizerRight).style.left = (posX + this._resizerWidth) + 'px';
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ResizerDirective.prototype, "resizerHeight", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResizerDirective.prototype, "resizerTop", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResizerDirective.prototype, "resizerBottom", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ResizerDirective.prototype, "resizerWidth", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResizerDirective.prototype, "resizerLeft", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResizerDirective.prototype, "resizerRight", null);
                ResizerDirective = __decorate([
                    core_1.Directive({
                        selector: '[jmResizer]',
                        host: {
                            '(mousedown)': '_onMouseDown($event)',
                            '(window:mouseup)': '_onMouseUp()',
                            '(body:mousemove)': '_onMouseMove($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ResizerDirective);
                return ResizerDirective;
            })();
            exports_1("ResizerDirective", ResizerDirective);
        }
    }
});
//# sourceMappingURL=resizer.directive.js.map