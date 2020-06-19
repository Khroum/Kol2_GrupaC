import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDetailsMFComponent } from './components/shop-details-mf/shop-details-mf.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
