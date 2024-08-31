import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
logout() {
  //remove the token 
  sessionStorage.removeItem("token")
  //navigate to login
this.router.navigateByUrl("/login")
}

}
