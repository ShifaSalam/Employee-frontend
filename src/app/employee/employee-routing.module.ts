import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
const routes: Routes = [
  // localhost:4200/employee
  { path: '', component: EmpListComponent },
  // localhost:4200/employee/addemp
  { path: 'addemp', component: AddEmpComponent },
  // localhost:4200/employee/editemp
  {path:'editemp/:id',component:EditEmpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
