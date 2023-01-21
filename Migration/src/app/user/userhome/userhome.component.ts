import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from 'src/app/view-services.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit{
  public item=localStorage.getItem('firstname');
  constructor(private service:ViewServicesService){}
  

  ngOnInit():void{
    
  }
}
