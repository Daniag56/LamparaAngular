import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {
  //imput y output
  enchufada = input<boolean>(false);
  estadoLampara =  output<'ENCENDIDA' | 'APAGADA'>();
  //propiedades
  encendida = false;

  //eventos
  onApagarEncender(){
    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida ? "ENCENDIDA" : "APAGADA");
  }


}
