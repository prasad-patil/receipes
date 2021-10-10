import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective implements AfterContentInit {
  @HostBinding('class.show') showDropdown: boolean = false;
  @Input('appDropdown') dropDownMenu: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.renderer.removeClass(this.dropDownMenu, 'show');
  }

  @HostListener('window:click', ['$event'])
  onDropDownClick(event: MouseEvent) {
    if (
      !this.showDropdown &&
      this.elementRef.nativeElement.contains(event.target)
    ) {
      this.showDropdown = true;
      this.renderer.addClass(this.dropDownMenu, 'show');
    } else {
      this.showDropdown = false;
      this.renderer.removeClass(this.dropDownMenu, 'show');
    }
  }
}
