import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {CrudService} from  'src/app/service/crud.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formEmpoyee:FormGroup;
  elID:any;
  constructor(
    private crudService:CrudService,
    public formulario:FormBuilder,
    private activedRoute:ActivatedRoute,
    private ruteador:Router
  ) {
     this.elID=this.activedRoute.snapshot.paramMap.get('id');
     console.log(this.elID);

    this.crudService.ObtenerEmployee(this.elID).subscribe(result =>{
      console.log(result);
      this.formEmpoyee.setValue({
        nombre:result[0]['nombre'],
        correo:result[0]['correo']
      });
    }
    );
    this.formEmpoyee = this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos():any {
    //console.log("Me precionaste")
    console.log(this.formEmpoyee.value)
    this.crudService.UpdateEmployees(this.elID,this.formEmpoyee.value).subscribe(result=>{
      this.ruteador.navigateByUrl('/list-employee');
    });

  }


}
