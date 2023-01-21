import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';

@Component({
  selector: 'app-policeviewmore',
  templateUrl: './policeviewmore.component.html',
  styleUrls: ['./policeviewmore.component.scss']
})
export class PoliceviewmoreComponent {

  applicationId :any;
  Dataarray: any[] = [];
  registerForm:FormGroup;
  disabled:any;
  constructor(private route:ActivatedRoute, private Fb:FormBuilder,private service:ViewServicesService) {
  
    this.route.paramMap.subscribe((params: ParamMap) =>{
  
      this.applicationId= params.get('id')
  
    })
    this.registerForm= this.Fb.group({
    applicationId:[''],
    Firstname:[''],
    Lastname:[''],
    Email:[''],
    Phoneno:[''],
    gender:[''],
    Dob:[''],
    Address1:[''],
    Address2:[''],
    City:[''],
    District:[''],
    State:[''],
    Pincode:[''],
    PlacetoMigrate:[''],
    PurposetoMigrate:[''],
    AadharNumber:[''],
    Status:['']
    })
  }
  
  ngOnInit():void{
    this.registerForm.disable();
    this.service.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{
  
      this.Dataarray = data;
      this.registerForm.setValue({
  
        applicationId:data.applicationId,
        Firstname:data.firstName,
        Lastname:data.lastName,
        Email:data.email,
        Phoneno:data.phoneno,
        gender:data.gender,
        Dob:data.dob,
        Address1:data.address1,
        Address2:data.address2,
        City:data.city,
        District:data.district,
        State:data.state,
        Pincode:data.pincode,
        PlacetoMigrate:data.placetoMigrate,
        PurposetoMigrate:data.purposetoMigrate,
        AadharNumber:data.aadharNumber,
        Status:data.status
        
      });
      });
  }
}
