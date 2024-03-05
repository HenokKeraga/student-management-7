import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../students';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  student$: Observable<Student> | undefined;
  student: Student | undefined;
  age: Number|undefined

  constructor(
    private studentService: StudentsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((param) =>
          this.studentService.getStudent(Number(param.get('id')))
        )
      )
      .subscribe((stu) => (this.student = stu));
  }

  // changeAge(newAge: number) {
  //   let id = this.student && this.student.id;
  //   console.log(newAge)
  //   if (id) {
  //     this.studentService.updateAge(+id, newAge).subscribe();
  //   }
  // }
  changeAge() {
    console.log(this.student);
    let id = this.student && this.student.id;

    if (id &&  this.age) {
      this.studentService.updateAge(+id, +this.age).subscribe();
    }
  }
  select() {}
}
