import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Parrafo1Component } from './componentes/parrafo1/parrafo1.component';
import { ImgcamComponent } from './componentes/imgcam/imgcam.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PieComponent,
    Parrafo1Component,
    ImgcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
