import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ApplicationRegComponent } from './user/application-reg/application-reg.component';

import { ViewapplicationsComponent } from './admin/viewapplications/viewapplications.component';
import { ViewmoreComponent } from './admin/viewmore/viewmore.component';
import { PolicehomeComponent } from './police/policehome/policehome.component';
import { PoliceviewapplicationComponent } from './police/policeviewapplication/policeviewapplication.component';
import { HeaderComponent } from './police/header/header.component';
import { FooterComponent } from './police/footer/footer.component';
import { PoliceLayoutComponent } from './police/police-layout/police-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    LoginComponent,
    AdminhomeComponent,
    UserhomeComponent,
    ApplicationRegComponent,
   
    ViewapplicationsComponent,
    ViewmoreComponent,
    PolicehomeComponent,
    PoliceviewapplicationComponent,
    HeaderComponent,
    FooterComponent,
    PoliceLayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
