import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserviewstsComponent } from './userviewsts/userviewsts.component';
import { UserviewmoreComponent } from './userviewmore/userviewmore.component';
import { UsereditComponent } from './useredit/useredit.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserLayoutComponent,
    UserviewstsComponent,
    UserviewmoreComponent,
    UsereditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
