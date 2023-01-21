import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private myservice: ViewServicesService,
    private router: Router
  ) {}
  ContactForm = this.fb.group({
    Name: [''],
    Email: [''],
    Subject: [''],
    Message: [''],
   
  });
  Onsubmit() {
   
    this.myservice.sendContact(this.ContactForm.value);
    alert('Your message has been sent. Thank you!');
    this.router.navigate(['/home']);
   
  }

 ngOnInit():void
 {

 }

}
