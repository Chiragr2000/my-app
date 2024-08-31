import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {

  public vehicle:any = [];


constructor(private _activatedRoute:ActivatedRoute, ){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
    }
  )


}

}