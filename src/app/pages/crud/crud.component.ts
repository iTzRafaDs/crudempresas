import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  searchText: any;
  empresas: EmpresaModel[] = [];
  idEmpresa: string = "";

  constructor(private EmpresasService: EmpresasService) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  obtenerEmpresas(){
    this.EmpresasService.getUsuarios()
    .then((response: any) => {
      this.empresas = response.cont.empresas;
      console.log(this.empresas);
    })
    .catch((error: any) => {
      this.empresas = [];
      Swal.fire
      ({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  counter(i:number){
    return new Array(i)
  }

  isShown: boolean = false;

  toggleShow(idEmpresa: any){
    this.idEmpresa = idEmpresa;
    this.isShown= true;
  }

  restableceRegistro(){
    this.isShown = false;
    this.obtenerEmpresas();
  }

  eliminar(empresa: EmpresaModel){
    Swal.fire({
      icon: "question",
      title: `¿Eliminar a ${empresa.strNombre}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.EmpresasService.deleteUsuarios(empresa._id)
        .then((response: any) => {
          Swal.fire
          ({
            icon: "success",
            text: "La empresa se ha eliminado de forma correcta"
          });
          this.obtenerEmpresas();
        })
        .catch((error: any) => {
          Swal.fire
          ({
            icon: "error",
            text: "intentelo nuevamente"
          });
        })
      }
    })
  }

  logo(url:string, name:string, text:string){
    Swal.fire({
      title: 'Compañia: ' + name,
      text: 'Razon Social: ' + text,
      imageUrl: url,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

}
