import { Component } from '@angular/core';
import { FlipkartCartService } from '../flipkart-cart.service';

@Component({
  selector: 'app-flipkart-cart',
  templateUrl: './flipkart-cart.component.html',
  styleUrls: ['./flipkart-cart.component.css']
})
export class FlipkartCartComponent {
  public flipkartProducts:any=[]

  constructor(private flipkartService:FlipkartCartService){
    flipkartService.getPrduct().subscribe({
      next:(data:any)=>{
        this.flipkartProducts=data;
        console.log(data)
      },
      error:(error:any)=>{
        alert("internal server error")
      },
      complete:()=>{
        console.log("flipkart product details fetched succesfully")
      }
    })
  }

}
