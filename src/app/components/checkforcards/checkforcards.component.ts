import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { MarvelCharacter } from 'src/app/models/marvelcharacter.model';
import { CardsService } from 'src/app/services/cards.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-checkforcards',
  templateUrl: './checkforcards.component.html',
  styleUrls: ['./checkforcards.component.css'],
})
export class CheckforcardsComponent implements OnInit {
  private filteredData: Character[] = [];
  public randomCard?: Character;
  public marvelCharacter?: MarvelCharacter;

  constructor(
    private card: CardsService,
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.card.getData().subscribe((data) => {
      this.filteredData = data.card.filter(
        (card: Character) => card.type === 'Character'
      );
      console.log(this.filteredData);
      this.getRandomCard();
    });
  }

  getRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.filteredData.length);
    this.randomCard = this.filteredData[randomIndex];

    this.getMarvelCharacter(this.randomCard.name);

    console.log('MARVEL SNAP INFO');
    console.log('Generated card: ', this.randomCard);
    console.log('Card id: ', this.randomCard.id);
    console.log('Card name: ', this.randomCard.name);
    console.log('Card ability: ', this.randomCard.ability);
    console.log('Card type: ', this.randomCard.type);
  }

  getMarvelCharacter(characterName: string) {
    this.marvelService
      .getMarvelCharacter(characterName)
      .subscribe((marvelResponse) => {
        try {
          if (marvelResponse.data && marvelResponse.data.results.length > 0) {

            this.marvelCharacter = marvelResponse.data.results[0];
            console.log(this.marvelCharacter);
            if (this.marvelCharacter?.description == '') {
              this.marvelCharacter.description =
              'No description available from the Marvel API';
            }
            const imageUrl = `https://images.marvelsnap.io/images/cards/${this.randomCard?.id}.webp`;
            if (this.randomCard) {
              this.randomCard.imageUrl = imageUrl;

            }
            console.log(this.marvelCharacter?.description);
          } else {
            console.log(`Character "${characterName}" not found in the Marvel API. Rerolling...`);
            this.getRandomCard();
          }
        } catch(error) {
          console.error('Error fetching Marvel character:', error);
          this.getRandomCard();
        }
      });
  }
}
