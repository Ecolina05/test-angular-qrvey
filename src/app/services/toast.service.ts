import { Injectable } from '@angular/core';
import { toast, ToastType } from 'bulma-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  openToast(message: string, type: ToastType): void {
    toast({
      message: `<p class="is-size-6">${message}</p>`,
      type: type,
      dismissible: true,
      pauseOnHover: true,
      position: 'top-right',
      animate: { in: 'slideInRight', out: 'slideOutRight' },
    });
  }
}
