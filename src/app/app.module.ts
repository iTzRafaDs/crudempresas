import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RegistrarEmpresaComponent } from './pages/crud/registrar-empresa/registrar-empresa.component';
import { ActualizarEmpresaComponent } from './pages/crud/actualizar-empresa/actualizar-empresa.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    RegistrarEmpresaComponent,
    ActualizarEmpresaComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
