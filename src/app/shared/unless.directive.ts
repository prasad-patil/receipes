import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective implements OnChanges {
  @Input() appUnless: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcf: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (!changes.appUnless.currentValue) {
      this.vcf.createEmbeddedView(this.templateRef);
    } else {
      this.vcf.clear();
    }
  }
}
