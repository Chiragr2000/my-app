import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  public memesDetails:any=[]
constructor(private memeService:MemesService){}
ngOnInit():void
{
 this.memeService.getMemesDetails().subscribe((data)=>{
console.log(data)
console.log(data.data)
  console.log(data.data.memes)

  this.memesDetails=data.data.memes
 },
(error)=>{
  alert("internal server error")
})
}
}
