import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from './students';
import { map } from 'rxjs/operators';

interface StudentDTO {
  id: string;
  name: string;
  department: string;
  age: string;
}
const credintial = {
  username: 'henok',
  password: 321,
};
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  baseUrl: string = 'http://localhost:8094';

  constructor(private httpclient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const headers: HttpHeaders = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credintial.username + ':' + credintial.password),
    });
    return this.httpclient
      .get<StudentDTO[]>(this.baseUrl + '/students', {
        headers,
      })
      .pipe(map((students) => students.map(this.convertToStudent)));
  }

  getStudent(id: number): Observable<Student> {
    const headers: HttpHeaders = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credintial.username + ':' + credintial.password),
    });
    return this.httpclient.get<Student>(`${this.baseUrl}/students/${id}`, {
      headers,
    });
  }

  createStudent(name: string, age: number): Observable<Student> {
    const headers: HttpHeaders = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credintial.username + ':' + credintial.password),
    });

    return this.httpclient
      .post<StudentDTO>(
        `${this.baseUrl}/student`,
        { name, age, department: '' },
        { headers }
      )
      .pipe(map((stuDto) => this.convertToStudent(stuDto)));
  }

  updateAge(id: number, age: number): Observable<number> {
    console.log(id, age);
    const headers: HttpHeaders = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credintial.username + ':' + credintial.password),
    });
    return this.httpclient.patch<number>(
      `${this.baseUrl}/students/${+id}`,
      { age: +age },
      { headers }
    );
  }

  private convertToStudent(student: StudentDTO): Student {
    return {
      id: student.id,
      name: student.name,
      age: student.age,
    };
  }
}
