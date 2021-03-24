import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { UnitconversionComponent } from './components/unitconversion/unitconversion.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KmtomPipe } from './pipes/kmtom.pipe';
import { CmtomPipe } from './pipes/cmtom.pipe';
import { CitofhPipe } from './pipes/citofh.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { PaypaymentComponent } from './components/paypayment/paypayment.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardmaskPipe } from './pipes/cardmask.pipe';
import { AgePipe } from './pipes/age.pipe';
import { CountryComponent } from './components/country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrencyComponent,
    UnitconversionComponent,
    PagenotfoundComponent,
    DashboardComponent,
    KmtomPipe,
    CmtomPipe,
    CitofhPipe,
    PaymentComponent,
    PaypaymentComponent,
    CustomerComponent,
    CardmaskPipe,
    AgePipe,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
