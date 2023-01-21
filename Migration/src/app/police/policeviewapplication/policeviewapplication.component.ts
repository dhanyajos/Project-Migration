import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewServicesService } from 'src/app/view-services.service';

@Component({
  selector: 'app-policeviewapplication',
  templateUrl: './policeviewapplication.component.html',
  styleUrls: ['./policeviewapplication.component.scss']
})
export class PoliceviewapplicationComponent {
  constructor(private service:ViewServicesService,private router:Router){}
  Dataarray: any[] = [];


  onSelectStatus(status:any)
  {
    console.log(status);

    let district=localStorage.getItem('district')
    this.service.PoliceGetApplicationdata(district,status).subscribe((res) => {

    this.Dataarray = res;
      
      })


  }

  ngOnInit(){
    
  }
 
}
