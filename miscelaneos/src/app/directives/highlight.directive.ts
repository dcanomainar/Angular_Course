import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'yellow';
    // console.log('Called');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
