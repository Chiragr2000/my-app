import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css'],
})
export class CreateVehiclesComponent {
 

  public id:string = "";

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  })
  constructor(private vehiclesService:VehiclesService, private _activedRoute:ActivatedRoute){
    _activedRoute.params.subscribe(
      (data:any)=>{
      console.log(data.id);
      this.id=data.id;;

     vehiclesService.getVehicle(data.id).subscribe(
      (data:any)=>{
        this.vehicleForm.patchValue(data);
        
      }
     )
    
    }
  )
}


  create(){
    console.log(this.vehicleForm.value);

    if(this.id){
    this.vehiclesService.createVehicles(this.vehicleForm.value, this.id).subscribe(
      (data:any)=>{
      alert("Updated successfully!!!!");
      this.vehicleForm.reset();
    },
  
    (error:any)=>{
      alert("Updation Failed!");
    }
  )
    }
  

    else{
      // create
      this.vehiclesService.createVehicles(this.vehicleForm.value, this.id).subscribe(
        (data:any)=>{
          alert("created successfully!!!!");
          this.vehicleForm.reset();
        },
        (error:any)=>{
          alert("creation Failed");
        }
      )
    }
  }
}
