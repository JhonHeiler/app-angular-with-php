import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'add-employee'},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'list-employee', component:ListEmployeeComponent},
  {path:'edit-employee/:id', component: EditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
