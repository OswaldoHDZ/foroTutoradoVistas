import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barraSuperior/barraSuperior.component';
import { CrearTemaComponent } from './crearTema/crearTema.component';
import { TemasComponent } from './temas/temas.component';
import { ComentariosComponent } from './ventanaComentarios/comentarios.component';

@NgModule({
   declarations: [
      AppComponent,
      BarraSuperiorComponent,
      CrearTemaComponent,
      TemasComponent,
      ComentariosComponent
      
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
