import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { VehiculoService } from './vehiculo/vehiculo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculoModule,
    HttpClientModule
  ],
  providers: [
    VehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
