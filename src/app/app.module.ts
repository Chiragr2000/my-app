import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule} from '@angular/common/http';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MemesComponent } from './memes/memes.component';
import { ReloadComponent } from './reload/reload.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    AmazonCartComponent,
    VehiclesComponent,
    BankAccountsComponent,
    FlipkartCartComponent,
    EmailComponent,
    CreateVehiclesComponent,
    CreateBankAccountComponent,
    StudentComponent,
    CreateStudentComponent,
    MemesComponent,
    ReloadComponent,
    CreateVehicleComponent,
    ViewVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
