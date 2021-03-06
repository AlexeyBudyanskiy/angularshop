import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  constructor(public el: ElementRef, private render: Renderer2) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    console.log('mouseenter event on host element');
    this.highlight('yellow');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void  {
    console.log('mouseleave event on host element');
    this.highlight(null);
  }

  @HostListener('click', ['$event'])
  click(event: Event): void  {
    console.log('mouseclick event on host element');
    this.render.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
  }

  private highlight(color: string): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }


}
