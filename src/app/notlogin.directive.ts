import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appNotlogin]'
})
export class NotloginDirective {

  constructor(
    private el: ElementRef,
    private re: Renderer2,
    private _AuthService: AuthService
  ) {
    this._AuthService.userDate.subscribe({
      next: (response) => {
        if (response) {
          this.re.removeAttribute(this.el.nativeElement, 'hidden');
        } else {
          this.re.setAttribute(this.el.nativeElement, 'hidden', 'true');
        }
      },
    });
  }
}
