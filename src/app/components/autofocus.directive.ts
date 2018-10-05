import { Directive, DoCheck, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})

export class AutofocusDirective implements OnInit, DoCheck {
  private wasHiddenBefore: boolean;

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.wasHiddenBefore = true;
  }

  ngDoCheck(): void {
    if (!this.isHidden() && this.wasHiddenBefore) {
      this.elementRef.nativeElement.focus();
      this.wasHiddenBefore = false;
    } else if (this.isHidden()) {
      this.wasHiddenBefore = true;
    }
  }

  private isHidden() {
    return (this.elementRef.nativeElement.offsetParent === null);
  }
}
