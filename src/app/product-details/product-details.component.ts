import {  Component, OnInit } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ){ }
  ngOnInit(): void {
    // First get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"))

    // Find the product that correspond with the id provided in the route
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
