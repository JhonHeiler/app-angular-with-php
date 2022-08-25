import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CrudService} from  'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formEmpoyee:FormGroup;
  constructor(public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router) {
    this.formEmpoyee=this.formulario.group({
      nombre:[''],
      correo:['']
    })

   }

  ngOnInit(): void {
  }
    enviarDatos():any {
      //console.log("Me precionaste")
      console.log(this.formEmpoyee.value)
      this.crudService.AddEmployees(this.formEmpoyee.value).subscribe(result=>{
        alert("Registro agregado con exito")
        this.ruteador.navigateByUrl('/list-employee');
      });

    }''


}
