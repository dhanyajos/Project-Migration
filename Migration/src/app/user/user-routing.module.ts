import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRegComponent } from './application-reg/application-reg.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserviewmoreComponent } from './userviewmore/userviewmore.component';
import { UserviewstsComponent } from './userviewsts/userviewsts.component';


const routes: Routes = [{
  path: '',
  component: UserLayoutComponent,
  children: [
  { path: '', component: UserhomeComponent },
  
  { path: 'apply', component: ApplicationRegComponent },
  { path: 'userviewsts', component: UserviewstsComponent},
  { path: 'userviewmore/:id', component: UserviewmoreComponent },
  { path: 'useredit/:id', component: UsereditComponent}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
