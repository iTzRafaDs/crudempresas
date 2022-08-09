import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresasService } from '../../../services/empresas.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  usuario: EmpresaModel = new EmpresaModel();
  @Output() emitirRegistro: EventEmitter<any> = new EventEmitter();

  constructor(private readonly EmpresasService: EmpresasService) { }

  ngOnInit(): void {
  }

  registrarEmpresa(forma: NgForm)
  {
    this.EmpresasService.postUsuario(this.usuario)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Usted a añadido una empresa correctamente"
      });
      forma.reset();
      this.emitirRegistro.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Intentelo nuevamente por favor, verifique sus datos"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
