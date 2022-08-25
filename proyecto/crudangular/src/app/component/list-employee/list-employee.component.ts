import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  Empoyees:any
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerEmpoyees().subscribe(result =>{console.log(result);
    this.Empoyees =result;
    });
  }
  deleteRegistre(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.crudService.DeleteEmployees(id).subscribe((respuesta)=>{
      this.Empoyees.splice(iControl, 1)
    });
  }
  }

}
