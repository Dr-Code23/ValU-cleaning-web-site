import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cart:any[] = []
  all:any[]=[]
  user:any = null
  cat:any[]=[]
  loader:boolean=false
constructor(private serv:UserServiceService , private router:Router){}



ngOnInit():void{
 

this.getcat()
this.getAll()
}

getAll(){
this.serv.showService().subscribe((data:any)=>{
this.all=data.data


})
}

getcat(){

  this.serv.showCat().subscribe((data:any)=>{
this.cat=data.categories

  })
}
logout(){
  // this.serv.user.next(data)
  localStorage.removeItem('token')
  this.router.navigateByUrl('/login')

}
}
