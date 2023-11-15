import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.css']
})
export class GobackComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  clicked() {
    this.router.navigate([
      ''
    ])
  }
}
