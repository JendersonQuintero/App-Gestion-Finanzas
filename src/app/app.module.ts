import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogginComponent } from './pages/loggin/loggin.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { SharedOperationsComponent } from './pages/shared-operations/shared-operations.component';
import { CheckoutMovementComponent } from './pages/checkout-movement/checkout-movement.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    LogginComponent,
    OperationsComponent,
    SharedOperationsComponent,
    CheckoutMovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
