import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: ProductListComponent
  },
  {
    path: "products/:productId", component: ProductDetailsComponent
  }
];

export default routes;


