import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  cards: any = [];
  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards = this.cardsService.getPopularCards();
  }

}
