import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private loginService: LoginService, private router: Router) {}
  login() {
    // console.log(this.loginForm);
    this.loginService.login(this.loginForm.value).subscribe(
      (data) => {
        // console.log(data)
        alert('login successful');

        //store the token
        sessionStorage.setItem("token",data.token);
        // this.router.navigate(['/dashboard'])
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        alert('Invalid Credentials..');
      }
    );
  }
}
