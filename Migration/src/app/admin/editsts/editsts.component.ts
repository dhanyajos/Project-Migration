import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-editsts',
  templateUrl: './editsts.component.html',
  styleUrls: ['./editsts.component.scss']
})
export class EditstsComponent implements OnInit {
  
    applicationId: any;

    public dataarray:any;
  
    EditstsForm: FormGroup;
  
    constructor(private route:ActivatedRoute, private fb:FormBuilder,private service:ViewServicesService,private router:Router) {
  
      this.route.paramMap.subscribe((params: ParamMap) =>{
  
        this.applicationId= params.get('id')
  
      })
  
  
  this.EditstsForm=this.fb.group({
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
    Status:[''],
    DateofAdminStatus:[''],
    RemarksbyPolice:[''],
    DateofPoliceStatus:[''],
    DateofApplied:[''],
    
  
  })
}
ngOnInit(): void 
  {
    this.service.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{

      this.dataarray = data;
      this.EditstsForm.setValue({

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
        Status:data.status,
        DateofAdminStatus:data.dateofAdminStatus,
        RemarksbyPolice:data.remarksByPolice,
        DateofPoliceStatus:data.dateofPoliceStatus,
        DateofApplied:data.dateofApplied,

      });
      });
  }
  

EditSts()
{
  this.service.updateapplicationdata(this.EditstsForm.value)
  alert("Status updated successfully");
  this.router.navigate(['/adminhome/viewapplications'])

}
}
