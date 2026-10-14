import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proj-lamp';

  enchufado = false;

  estadoLampara: 'ENCENDIDA' | 'APAGADA' = 'APAGADA';

  onDesenchufar() {
    this.enchufado = false;
  }

  onEnchufar() {
    this.enchufado = true;
  }

   onCambioEstadoLampara(estado: 'ENCENDIDA' | 'APAGADA'){
    this.estadoLampara = estado;
  }
}
