import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentCreateComponent } from './student-create/student-create.component';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent, StudentCreateComponent],
  imports: [CommonModule, StudentsRoutingModule,FormsModule,ReactiveFormsModule],
  exports: [StudentsListComponent],
})
export class StudentsModule {}
