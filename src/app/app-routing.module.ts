import { SharedOperationsComponent } from './pages/shared-operations/shared-operations.component';
import { LogginComponent } from './pages/loggin/loggin.component';
import { CheckoutMovementComponent } from './pages/checkout-movement/checkout-movement.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/operations', pathMatch: 'full' },
  { path: 'loggin', component: LogginComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'shared-operations', component: SharedOperationsComponent },
  { path: 'checkout-movement', component: CheckoutMovementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
