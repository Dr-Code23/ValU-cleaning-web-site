import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-detalisreviwe',
  templateUrl: './detalisreviwe.component.html',
  styleUrls: ['./detalisreviwe.component.css']
})
export class DetalisreviweComponent {
  id:any
  Review:any[]=[]
  constructor(private serv :UserServiceService , private router:ActivatedRoute,
    private tostor:ToastrService , private fb:FormBuilder){
  
    this.id= this.router.snapshot.paramMap.get('id')
  }
  ngOnInit():void{
  
  this.getAllReviewAll()
  this.getAllReview()
  }


getAllReviewAll(){
  this.serv.showReview(this.id).subscribe((data:any)=>{
   this.Review=data.data.comments

  })
}
getAllReview(){
  this.serv.showReviewAll().subscribe((data:any)=>{

// this.Review=data.data



  })
}
}
