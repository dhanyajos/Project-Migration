import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';
declare var getdate: any;
@Component({
  selector: 'app-editstsbypolice',
  templateUrl: './editstsbypolice.component.html',
  styleUrls: ['./editstsbypolice.component.scss']
})
export class EditstsbypoliceComponent {
  
  //today = new Date().toISOString().substring(0,10);
 
  
  
  applicationId: any;

  public dataarray:any;

  EditstsbypoliceForm: FormGroup;

  constructor(private route:ActivatedRoute, private fb:FormBuilder,private service:ViewServicesService,private router:Router) {

    this.route.paramMap.subscribe((params: ParamMap) =>{

      this.applicationId= params.get('id')
      console.log(this.applicationId)

    })

 
this.EditstsbypoliceForm=this.fb.group({
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
  RemarksbyPolice:[''],
  DateofPoliceStatus:[''],
  DateofAdminStatus:[''],
  DateofApplied:[''],
  

})
}


ngOnInit(): void 
{
  this.service.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{

    this.dataarray = data;
    this.EditstsbypoliceForm.setValue({

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
      RemarksbyPolice:data.remarksByPolice,
      DateofPoliceStatus:data.dateofPoliceStatus,
      DateofAdminStatus:data.dateofAdminStatus,
      DateofApplied:data.dateofApplied,
    });
    });
}


EditSts()
{

this.service.updateapplicationdata(this.EditstsbypoliceForm.value)
alert("Status updated successfully");
this.router.navigate(['/policehome/policeview'])
}
}
