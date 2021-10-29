import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Parrafo1Component } from './componentes/parrafo1/parrafo1.component';
import { ImgcamComponent } from './componentes/imgcam/imgcam.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { PrecioComponent } from './paginas/precio/precio.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { CaracteristicasComponent } from './paginas/caracteristicas/caracteristicas.component';
import { FeaturesComponent } from './componentes/features/features.component';
import { PreciosComponent } from './componentes/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PieComponent,
    Parrafo1Component,
    ImgcamComponent,
    ContactenosComponent,
    PrecioComponent,
    RedesComponent,
    CaracteristicasComponent,
    FeaturesComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
