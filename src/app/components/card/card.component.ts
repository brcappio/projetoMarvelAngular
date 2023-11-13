import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() text: string = "";
  @Input() image: string = "";
  @Input() url: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  clicked() {
    this.router.navigate([
      this.url
    ])
  }
}
