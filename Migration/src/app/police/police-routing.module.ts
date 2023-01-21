import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstsbypoliceComponent } from './editstsbypolice/editstsbypolice.component';
import { PoliceLayoutComponent } from './police-layout/police-layout.component';
import { PolicehomeComponent } from './policehome/policehome.component';
import { PoliceviewapplicationComponent } from './policeviewapplication/policeviewapplication.component';
import { PoliceviewmoreComponent } from './policeviewmore/policeviewmore.component';

const routes: Routes = [ {
path: '',
component: PoliceLayoutComponent,
children: [
{ path: '', component: PolicehomeComponent },

{ path: 'policeview', component: PoliceviewapplicationComponent},
{ path: 'policeeditsts/:id', component:EditstsbypoliceComponent},
{ path: 'policeviewmore/:id', component:PoliceviewmoreComponent}

],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliceRoutingModule { }
