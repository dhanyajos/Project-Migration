import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewServicesService } from '../view-services.service';
declare var cap:any;
declare var validcap:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Angular';
  type:string="Password";
  isText:boolean=false; 
  eyeIcon:string="fa-eye-slash";
  Dataarray:any[]=[];
  loginForm!:FormGroup;
  isUserValid: boolean = false;
  public Loginstatus =false;
  constructor(private fb:FormBuilder,private viewservice:ViewServicesService,private router:Router){}

  ngOnInit():void{
    cap();
    this.loginForm=this.fb.group({
    Username:['',Validators.required],
    Password:['',Validators.required]
    })
      
  }

  hideShowPass()
  {

    this.isText=!this.isText;

    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";

    this.isText?this.type="text":this.type="Password";
  }

  onLogin(){
    var name=this.loginForm.value.Username
    this.viewservice.getUserDetails(name).subscribe((res:any) => {
    this.Dataarray = res;    
    })
     
    if (this.loginForm.value.Username == 'Admin' && this.loginForm.value.Password == 'Admin' && validcap()==true)  
    {
    
    this.router.navigate(['adminhome'])
    
    }
    else if (validcap()==true)  
    {
    
    
    this.viewservice

    .loginPolice([this.loginForm.value.Username, this.loginForm.value.Password])

    .subscribe(res => {

      console.log(res);

      console.log(this.loginForm.value.username)

      if (res == 'Success') {
       
        this.isUserValid = true;
        let district = this.loginForm.value['Username'].substring(7);
        console.log(district);
        localStorage.setItem('district',district)
        this.router.navigate(['policehome'])

      }  
      else if(validcap()==true)
    
      {
      
        this.viewservice
  
        .login([this.loginForm.value.Username, this.loginForm.value.Password])
  
        .subscribe(res => {
  
          console.log(res);
  
          console.log(this.loginForm.value.username)
  
          if (res == 'Failure') {
  
            this.isUserValid = false;
  
            alert('Invalid Credentials');
  
          } else {
  
            this.isUserValid = true;
            var phone=this.Dataarray[0].phoneno;
            var firstname=this.Dataarray[0].firstname;
            console.log(phone)
            console.log(firstname)
            localStorage.setItem('firstname',firstname); 
            localStorage.setItem('phone',phone);          
            this.router.navigate(['userhome'])
  
          }
  
        });
      
      }

    });
  
  }
    else
    {
      alert("Please enter a valid captcha");
         
    }
    
  }


}

  


