import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { ViewServicesService } from '../view-services.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  Dataarray: any[] = [];
  isUserValid: boolean = false;
  constructor(
    private fb: FormBuilder,
    private myservice: ViewServicesService,
    private router: Router
  ) {}
  RegForm = this.fb.group({
    Firstname: [''],
    Lastname: [''],
    Email: [''],
    Phoneno: [''],
    Username: [''],
    Password: [''],
    Confirmpass: [''],
  });
  Onsubmit() {
    var firstname: any;
    var lastname : any;
    var phone : any;
    var email:any;
   
    if(this.RegForm.value != null)
    {
    firstname = this.RegForm.value['Firstname'];
    lastname = this.RegForm.value['Lastname'];
    phone = this.RegForm.value['Phoneno'];
    email = this.RegForm.value['Email'];
   
    }
    
    if(this.RegForm.value['Password'] != this.RegForm.value['Confirmpass'])
    {
      alert('Passwords are not matching');
    }
    else
    {
      this.myservice.CheckPhoneno(phone).subscribe((res) => {

        this.Dataarray = res;
        console.log(this.Dataarray.length);
     

      if(this.Dataarray.length > 0 )
      {
          alert("Phoneno already exit")
      }

      else{
          this.myservice.RegisterUser(this.RegForm.value);
          alert('Registered Successfully');
          this.router.navigate(['/home']);
        }
      });
  
}
  }
  ngOnInit() {
    
    console.log('register');
  }
}
