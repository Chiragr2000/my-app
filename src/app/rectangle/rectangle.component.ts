import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
public length:number=0
public breadth:number=0
public result:number=0

area(){
this.result=this.length*this.breadth
}
perimeter(){
this.result=2*(this.length)*this.breadth
}
}
