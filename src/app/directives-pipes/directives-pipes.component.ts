import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {
public ages:number[]=[10,20,30,40,50]
public states:string[]=['Telengana',"karanataka","Andhra","Kerla","Tamil Nadu"]

public users:any=[
  {name:'vishal',age:15,phone:9876,marks:80},
  {name:'kalyan ',age:17,phone:9876,marks:101},
  {name:'nagesh',age:24,phone:9876,marks:-2},
  {name:'mani',age:34,phone:9876,marks:34}
]
public today:any=new Date()
}
