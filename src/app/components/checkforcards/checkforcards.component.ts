import { Component, OnInit, numberAttribute } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-checkforcards',
  templateUrl: './checkforcards.component.html',
  styleUrls: ['./checkforcards.component.css']
})
export class CheckforcardsComponent implements OnInit {

  private data: Character[] = [];

  constructor(private card: CardsService) {
  }

  ngOnInit(): void {
    this.card.getData().subscribe(data => {
      
      console.log()
      console.log(data)
      console.log(data.card[1])
      console.log(data.card.length)
      const charactersArray = data.card.filter((card: { type: string; }) => card.type === "Character")
      return charactersArray
    })
  }

  getRandomCard() {
  }

}
