import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  public addToCart(product): any {
    this.items.push(product);
  }

  public getItems(): any {
    return this.items;
  }

  public clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): object {
    return this.http.get('/assets/shipping.json');
  }
  constructor(private http: HttpClient) { }

}
