import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  visible: boolean = true;
  cards: Card[] = [
    {
      image:
        'https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/2023_08_22_16_10_51/SNAP_KA_1600X900_s336637.jpg',
      text: 'About Marvel Snap',
    },
      
    {
      image:
        'https://www.gamespot.com/a/uploads/scale_medium/1585/15855271/3978994-single_showcase_ghostrider_4x5_v2.png',
      text: 'Check For Cards',
    },

    {
      image:
        'https://github.com/brcappio/projetomarvelbasf/blob/master/src/assets/foto%20de%20perfil.png?raw=true',
      text: 'Portfolio',
    }
  ];

  onClick(evento: number) {
    this.visible = false;
    if (evento == 0) {
      console.log('cliquei no 1');
    } else if (evento == 1) {
      console.log('cliquei no 2');
    } else {
      console.log('cliquei no 3');
    }
  }
}
