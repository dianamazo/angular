import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCpLoop]'
})
export class CploopDirective {

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }

  @Input('appCpLoop') set loop(num: number) {
    for(var i=0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
