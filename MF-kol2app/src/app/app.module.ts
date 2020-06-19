import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MFDataService } from './services/mf-data.service';
import { ShopMFComponent } from './components/shop-mf/shop-mf.component';
import { ShopItemMFComponent } from './components/shop-item-mf/shop-item-mf.component';
import { ShopDetailsMFComponent } from './components/shop-details-mf/shop-details-mf.component';

@NgModule({
  declarations: [AppComponent, ShopMFComponent, ShopItemMFComponent, ShopDetailsMFComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MFDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
