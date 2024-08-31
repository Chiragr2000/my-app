import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number=20;
  public name:string="deep"
  public isIndian:boolean=true
  public isValid:boolean=false
  public url:string="/assets/image.png"

  public phone:string="+91 700 "

  submit(){
    alert('submitted...!')
  }
  typing(){
    alert("typing...")
  }

}
