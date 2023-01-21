import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';

@Component({
  selector: 'app-userviewsts',
  templateUrl: './userviewsts.component.html',
  styleUrls: ['./userviewsts.component.scss']
})
export class UserviewstsComponent {
  constructor(private service:ViewServicesService,private router:Router){}
  Dataarray: any[] = [];
 
  ngOnInit(){
    var phone =localStorage.getItem('phone');
    this.service.UserGetApplicationdata(phone).subscribe((res) => {

    this.Dataarray = res;
      
      })
  }
  
}
