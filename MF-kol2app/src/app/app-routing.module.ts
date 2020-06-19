import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDetailsMFComponent } from './components/shop-details-mf/shop-details-mf.component';

const routes: Routes = [{ path: '/:id', component: ShopDetailsMFComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
