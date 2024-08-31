import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup=new FormGroup({
    school_logo: new FormControl(),
    school_name: new FormControl(),
    name: new FormControl(),
    phone: new FormControl(),
    dob: new FormControl(),
    city: new FormControl(),
    email: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
    profile_picture:new FormControl()
  })
  constructor(private studentService:StudentServiceService){}
  create() {
   this.studentService.createStudent(this.studentForm.value).subscribe((result)=>{
    alert("new student object created");
    
   })
    }
}
