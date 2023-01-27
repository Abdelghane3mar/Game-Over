import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appIslogin]'
})
export class IsloginDirective {

  constructor(
    private el: ElementRef,
    private re: Renderer2,
    private _AuthService: AuthService
  ) {
    this._AuthService.userDate.subscribe({
      next: (response) => {
        if (response) {
          this.re.setAttribute(this.el.nativeElement, 'hidden', 'true');
        } else {
          this.re.removeAttribute(this.el.nativeElement, 'hidden');
        }
      },
    });
  }
}
