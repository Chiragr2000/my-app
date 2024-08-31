import { Component,OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  public emails:any=[]

  constructor(private emailService:EmailService ){}

  ngOnInit(){
   this.emailService.getEmails().subscribe({
    next:(data:any)=>{
      this.emails=data
      console.log(data)
    },
    error:(error:any)=>{
      alert("internal server error")
    },
    complete:()=>{
      console.log("email succesfully fetched");
    }
   })
  }

}
