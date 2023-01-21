import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';
import { HttpClient } from '@angular/common/http';
import { mergeScan } from 'rxjs';
declare var validation: any;
@Component({
  selector: 'app-application-reg',
  templateUrl: './application-reg.component.html',
  styleUrls: ['./application-reg.component.scss']
})
export class ApplicationRegComponent implements OnInit {
  today = new Date().toISOString().substring(0,10);
  constructor(private fb: FormBuilder, private myservice: ViewServicesService, private router: Router, private http: HttpClient) { }

  registerForm = this.fb.group({
    Firstname: [],
    Lastname: [],
    Email: [],
    Phoneno: [],
    gender: [''],
    Dob: [''],
    Address1: [''],
    Address2: [''],
    City: [''],
    District: [''],
    State: [''],
    Pincode: [''],
    PlacetoMigrate: [''],
    PurposetoMigrate: [''],
    AadharNumber: [''],
    Status: ['Application Received'],
    DateofApplied:[this.today]

  })

  ngOnInit(): void {
console.log(this.today)

  }


  registerSubmitted() {

    if (validation() == true) {
      this.myservice.sendApplicationData(this.registerForm.value)

      alert("Application Submitted Successfully");
      this.router.navigate(['/userhome'])
    }
    else {
      alert('Invalid Aadhar number')
    }

  }

}