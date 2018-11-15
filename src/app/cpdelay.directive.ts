import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCpdelay]'
})
export class CpdelayDirective {

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }

  @Input() set appCpdelay(delay: number) {
    this.viewContainer.clear();
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }

}
