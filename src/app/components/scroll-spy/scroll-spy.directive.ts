import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags: string[] = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection?: string;

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string = '';
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }

    if (currentSection && currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }

    if (currentSection === 'home' && document?.querySelector('#return-to-top')?.hasAttribute('style')) {
      document?.querySelector('#return-to-top')?.removeAttribute('style');
    } else if (!(document?.querySelector('#return-to-top')?.hasAttribute('style'))) {
      (document.querySelector('#return-to-top') as HTMLElement).style.display = 'block';
    }

  }

}
