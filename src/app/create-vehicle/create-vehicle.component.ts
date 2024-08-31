import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})


export class CreateVehicleComponent {
public id: string = "";
// vehicleForm: FormGroup=FormGroup((
//   name:
// ));
public vehicleForm: FormGroup = new FormGroup({
  Vehicle: new FormControl(),
  manufacturer: new FormControl(),
  model: new FormControl(),
  type: new FormControl(),
  fuel: new FormControl(),
  color: new FormControl(),
  image: new FormControl(),
  cost: new FormControl(),
  });
create() {
throw new Error('Method not implemented.');
}
private _vehicleForm: any;

 


constructor(private _vehicleService:VehiclesService, private activatedRoute:ActivatedRoute){

  activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id = data.id;
      _vehicleService.getVehicles(data.id).subscribe(
        (data:any)=>{
          this._vehicleForm.patchValue(data);
        }
      )
    }
  )

}
}
