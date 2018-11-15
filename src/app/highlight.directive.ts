// HostListener permite cambiar la aparariencia del DOM cuando ocurre un evento
// en este caso en particular se estan mananejando los evento de cuando se presiona
// el mouse (mouseenter) y cuanod se suelta (mouseleave)
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

    // Si se quiere concatenar texto al final cuando se situa en
    // el elmemento, sería así:
    this.el.nativeElement.innerText += 'HOLAAA';
  }
}
