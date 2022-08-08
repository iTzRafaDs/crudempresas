import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { EmpresaModel } from '../models/Empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  url: string = `${environment.baseUrl}/empresa`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) {}

    getUsuarios(){
      return lastValueFrom(this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
    }

    getUsuario(idUsuario: string){
    return lastValueFrom(this.http.get(`${this.url}/${idUsuario}`, {params: {matricula: this.matricula}}));
    }

    postUsuario(usuario: EmpresaModel){
      return lastValueFrom(this.http.post(`${this.url}`, usuario, {params: {matricula: this.matricula}}));
    }

    putUsuarios(usuario: EmpresaModel, idUsuario: string){
      return lastValueFrom(this.http.put(`${this.url}/${idUsuario}`, usuario, {params: {matricula: this.matricula}}));
    }

    deleteUsuarios(idUsuario: any){
    return lastValueFrom(this.http.delete(`${this.url}/${idUsuario}`, {params: {matricula: this.matricula}}));
  }
}
