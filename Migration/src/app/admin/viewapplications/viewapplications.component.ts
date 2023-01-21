import { Component } from '@angular/core';
import { ViewServicesService } from 'src/app/view-services.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-viewapplications',
  templateUrl: './viewapplications.component.html',
  styleUrls: ['./viewapplications.component.scss']
})
export class ViewapplicationsComponent {
  constructor(private service:ViewServicesService,private router:Router){}
  Dataarray: any[] = [];
  onSelectStatus(status:any)
  {
    console.log(status);

    this.service.getApplicationdatabystatus(status).subscribe((res) => {

    this.Dataarray = res;
        
        })
  }


  ngOnInit(){
    
  
  }
  
  onSubmitEdit(item:any)
  {
   this.router.navigate(['/adminhome/editsts,'])

  }

SendData(item:any){

if(item.status == 'Application Send to Police for verification'  )
{
  alert("Data already sent to police")
}
else if(item.status == 'Application Verified' || item.status == 'Application not Verified' || item.status == 'Application Approved')
{
  alert("Data already sent to police")
}
else if(item.status == 'Application Rejected' || item.status == 'Application Pending due to insufficient data')
{
  alert("Application pending")
}
else
{
item.status = 'Application Send to Police for verification'
this.service.sendDatatoPolice(item);
this.service.updateapplicationdata(item)
alert('Successfully sent data to ' + item.district + ' Police for verification')
}
}

}
