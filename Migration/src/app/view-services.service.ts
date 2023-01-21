import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  constructor(private http: HttpClient) { 
  }
login(loginInfo:Array<string>){

    return this.http.post("https://localhost:44384/api/UserRegister/LoginUser",{

    UserName:loginInfo[0],

    Password:loginInfo[1],

  },

  {

    responseType:'text',
 
  });

}

loginPolice(loginInfo:Array<string>){

  return this.http.post("https://localhost:44384/api/Police/LoginPolice",{

  UserName:loginInfo[0],

  Password:loginInfo[1],

},

{

  responseType:'text',

});

}
RegisterUser(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:44384/api/UserRegister/InsertUser",data).toPromise().then(result => { console.log(result); })
 }
 sendApplicationData(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:44384/api/Application/InsertApplication",data).toPromise().then(result => { console.log(result); })
 }

//  getApplicationdata() {

//   return this.http.get<any>('https://localhost:44384/api/Application/viewapplications')
  
//   }

  getApplicationBaseId(applicationId: any) {
    return this.http.get<any>('https://localhost:44384/api/Application/ViewApplicationById/'+ applicationId)
  }

  updateapplicationdata(data:any){
    this.http.post("https://localhost:44384/api/Application/UpdateApplication", data).toPromise().then(result =>
  
    { console.log(result); })
   
   }

   sendDatatoPolice(data : any)
   {
   // console.log(data);
    this.http.post("https://localhost:44384/api/UserRegister/InsertUser",data).toPromise().then(result => { console.log(result); })
   }

  sendContact(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:44384/api/Contact/InsertQuery",data).toPromise().then(result => { console.log(result); })
 }

 getQuerydata() {

  return this.http.get<any>('https://localhost:44384/api/Contact/viewquery')
  
  }

  
  // ViewApplicationdatabyPolice() {

  // return this.http.get<any>('https://localhost:44384/api/Application/ViewApplicationByPolice')
  
  // }
  // ViewApplicationByPolice(applicationId: any) {
  //   return this.http.get<any>('https://localhost:44384/api/Application/ViewApplicationByPolice/'+ applicationId)
  // }

  UserGetApplicationdata(phone:string|null|undefined)
  {

    return this.http.get<any>('https://localhost:44384/api/Application/Userviewapplications/' + phone)
    
}

PoliceGetApplicationdata(district:string|null|undefined,status:any)
{

  return this.http.get<any>('https://localhost:44384/api/Application/Policeviewapplications/' + district + '/' +status)
  
}


CheckPhoneno(phone:any){

  return this.http.get<any>('https://localhost:44384/api/UserRegister/CheckUser/' + phone)
}

getApplicationdatabystatus(status:any)
{
  return this.http.get<any>('https://localhost:44384/api/Application/viewapplicationsbystatus/' + status)

}

getUserDetails(name:any)
{
  return this.http.get<any>('https://localhost:44384/api/UserRegister/GetPhone/' + name)
}



}
