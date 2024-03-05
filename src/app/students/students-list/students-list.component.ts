import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../students';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: Observable<Student[]> | undefined;
  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
