import { Component, EventEmitter, Output } from '@angular/core';

import { StudentsService } from '../students.service';
import { Student } from '../students';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent {
  @Output() stAdd: EventEmitter<Student> = new EventEmitter();

  studentForm = new FormGroup({name:new FormControl(''),age:new FormControl(' ')});

  constructor(private studentService: StudentsService) {}

  addStudent(name: string, age: number) {
    this.studentService.createStudent(name, age).subscribe(stu =>{
      this.stAdd.emit(stu);
    });
  }
}
