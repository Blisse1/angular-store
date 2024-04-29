import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  // the @Input() decorator indicates that the property value passes in
  // from the component's parent, ProductListComponent
  @Output() notify = new EventEmitter();
  // Configuring ProductAlertsComponent with an @Output() allows
  // the ProductAlertsComponent to emit an event when the value of the
  // notify property changes
}
