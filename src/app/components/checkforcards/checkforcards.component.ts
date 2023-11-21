import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { MarvelCharacter } from 'src/app/models/marvelcharacter.model';
import { CardsService } from 'src/app/services/cards.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-checkforcards',
  templateUrl: './checkforcards.component.html',
  styleUrls: ['./checkforcards.component.css']
})
export class CheckforcardsComponent implements OnInit {
  @Input() name: string = "";
  @Input() ability: string = "";
  @Input() comics: number = 0;
  @Input() stories: number = 0;
  @Input() events: number = 0;
  @Input() series: number = 0;

  private filteredData: Character[] = [];
  public randomCard: Character | undefined;
  public marvelCharacter: MarvelCharacter | undefined;


  constructor(private card: CardsService, private marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.card.getData().subscribe(data => {
      this.filteredData = data.card.filter((card: Character) => card.type === 'Character')
      console.log(this.filteredData)
      this.getRandomCard()
    })
  }

  getRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.filteredData.length);
    this.randomCard = this.filteredData[randomIndex]

    const imageUrl = `https://images.marvelsnap.io/images/cards/${this.randomCard.id}.webp`;
    this.randomCard.imageUrl = imageUrl;

    this.getMarvelCharacter(this.randomCard.name);


    console.log('MARVEL SNAP INFO')
    console.log('Generated card: ', this.randomCard)
    console.log('Card id: ', this.randomCard.id)
    console.log('Card name: ', this.randomCard.name)
    console.log('Card ability: ', this.randomCard.ability)
    console.log('Card type: ', this.randomCard.type)
  }

  async getMarvelCharacter(characterName: string) {
    try {
      const response: any = await this.marvelService.getMarvelCharacter(characterName).toPromise();
  
      if (response.data && response.data.results.length > 0) {
        this.marvelCharacter = response.data.results[0];
        this.comics = this.marvelCharacter?.comics?.available || 0;
        this.series = this.marvelCharacter?.series?.available || 0;
        this.stories = this.marvelCharacter?.stories?.available || 0;
        this.events = this.marvelCharacter?.events?.available || 0;
        console.log('Marvel Character:', this.marvelCharacter);
        if (this.marvelCharacter?.description == "") {
          this.marvelCharacter.description = "No description avalible from the Marvel API"
        }
      } else {
        console.error(`Character "${characterName}" not found in the Marvel API. Rerolling...`);
        this.getRandomCard();
      }
    } catch (error) {
      console.error('Error fetching Marvel character:', error);
      this.getRandomCard();
    }
  }
}
