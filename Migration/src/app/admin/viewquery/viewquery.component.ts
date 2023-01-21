import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from 'src/app/view-services.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.scss']
})
export class ViewqueryComponent implements OnInit{
  constructor(private service:ViewServicesService){}
  Dataarray: any[] = [];
  
  
  ngOnInit():void{
    this.service.getQuerydata().subscribe((res) => {

    this.Dataarray = res;
     
      })
  }
  
}
