import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'hover');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'all 0.3s ease-in-out;'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'hover');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'all 0.3s ease-in-out;'
    );
  }
}
