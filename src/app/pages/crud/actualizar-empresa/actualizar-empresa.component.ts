import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresasService } from '../../../services/empresas.service';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  @Input() idEmpresa: string = "";
  usuario: EmpresaModel = new EmpresaModel();
  @Output() emitirActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly EmpresasService: EmpresasService) { }

  ngOnInit(): void {
    console.log(this.idEmpresa);
    this.EmpresasService.getUsuario(this.idEmpresa)
    .then((response: any) => {
      this.usuario = response.cont.empresa;
    })
    .catch(() => {});
  }

  actualizarEmpresa(forma: NgForm){
    this.EmpresasService.putUsuarios(this.usuario, this.idEmpresa)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se actualizó la empresa exitosamente"
      });
      this.emitirActualizacion.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al actualizar al empresa"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
