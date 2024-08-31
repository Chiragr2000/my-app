import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MemesComponent } from './memes/memes.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReloadComponent } from './reload/reload.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],  component:DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"",component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives-pipes',component:DirectivesPipesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'amazon-cart',component:AmazonCartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'bank-accounts',component:BankAccountsComponent},
    {path:'flipkart-cart',component:FlipkartCartComponent},
    {path:'emails',component:EmailComponent},
    {path:'create-vehicles',component:CreateVehiclesComponent},
    {path:'create-bank-account',component:CreateBankAccountComponent},
    {path:'students',component:StudentComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'memes',component:MemesComponent},
    {path:'reload',component:ReloadComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'view-vehicle/:id',component:ViewVehicleComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  ]},
 
  //wild card path
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
