import { Injectable } from '@angular/core';
import { Empleado} from './Empleado';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  Api: string='http://localhost/empleados/';

  constructor(private clienteHttp:HttpClient) { }
  AddEmployees(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.Api+"?insertar=1",datosEmpleado);
  }
  ObtenerEmpoyees(){
    return this.clienteHttp.get(this.Api);
    }

    DeleteEmployees(id:any):Observable<any>{
      return this.clienteHttp.get(this.Api+"?borrar="+id);
    }
    ObtenerEmployee(id:any):Observable<any>{
      return this.clienteHttp.get(this.Api+"?consultar="+id);
    }

    UpdateEmployees(id:any,datosEmpleado:Empleado):Observable<any>{
      return this.clienteHttp.post(this.Api+"?actualizar="+id,datosEmpleado);
    }
}
