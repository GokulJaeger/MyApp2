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
import { KmtomPipe } from './components/pipes/kmtom.pipe';
import { CmtomPipe } from './components/pipes/cmtom.pipe';
import { CitofhPipe } from './components/pipes/citofh.pipe';
import { HttpClientModule } from '@angular/common/http';

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
    CitofhPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
