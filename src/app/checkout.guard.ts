import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const checkoutGuard: CanDeactivateFn<CartComponent> = () => {
  return confirm('you have pending item in cart');
};
