import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Observable, count } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {

  public studentDetails: any = [];
  public text: string = '';
  public column: string = '';
  public order: string = '';
  public count: number = 0;
  public pageNo: number = 0;

  constructor(private studentService: StudentServiceService) {}
  ngOnInit() {
    this.getStudentDetails();
  }

  searchStudent() {
    this.studentService.searchStudent(this.text).subscribe(
      (data) => {
        this.studentDetails = data;
        if (!this.text) {
          this.getStudentDetails();
        }
      },
      (error) => {
        console.log('internal server error');
      }
    );
  }
  searchByOrder() {
    this.studentService.searchByOrder(this.column, this.order).subscribe(
      (data) => {
        this.studentDetails = data;
      },
      (error) => {
        console.log('internal server error');
      }
    );
  }
  paginate() {
    this.studentService.paginate(this.count, this.pageNo).subscribe(
      (data) => {
        this.studentDetails = data;
      },
      (error) => {
        console.log('internal server error');
      }
    );
  }
  getStudentDetails() {
    this.studentService.getStudentDetails().subscribe(
      (data) => {
        console.log(data);
        this.studentDetails = data;
      },
      (error) => {
        console.log('internal server error');
      }
    );
  }
  deleteStudent(id:number) {
   this.studentService.deleteStudent(id).subscribe((data)=>{
    this.studentDetails=data;
    if(data){
      alert(`student of id ${id} has been deleted`)
    }
    location.reload()
   })
    }
}
