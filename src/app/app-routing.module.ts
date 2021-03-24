import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaypaymentComponent } from './components/paypayment/paypayment.component';
import { UnitconversionComponent } from './components/unitconversion/unitconversion.component';
import customer from './models/customer';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'currency', component: CurrencyComponent },
      { path: 'unitconversion', component: UnitconversionComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'paypayment', component: PaypaymentComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'country', component: CountryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
