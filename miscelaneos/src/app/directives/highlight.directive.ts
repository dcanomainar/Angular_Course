import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'yellow';
    // console.log('Called');
  }

  @Input("appHighlight") newColour: string;

  @HostListener('mouseenter') mouseEnter() {
    this.highLight(this.newColour || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }

  private highLight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
