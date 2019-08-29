import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: String;
  constructor(private element: ElementRef){}

  constructor(private element : ElementRef) {
    
    element.nativeElement.style.padding = '10px';
    element.nativeElement.style.textAlign = 'center';
  }
  @HostListener ('mouseenter') onmouseenter(){
    this.highlight('dodgerblue','bold');
  }
  @HostListener ('mouseleave') onmouseleave(){
    this.highlight(null,null);
  }

  private highlight(color:String, type: String){
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.fontWeight = type;
  }
}
