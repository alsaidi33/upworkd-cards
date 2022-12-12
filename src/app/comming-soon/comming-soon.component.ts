import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css']
})
export class CommingSoonComponent implements OnInit {

  cards: any = [];
  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards = this.cardsService.getCommingSoonCards();
  }


}
