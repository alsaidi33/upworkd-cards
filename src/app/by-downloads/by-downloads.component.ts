import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-by-downloads',
  templateUrl: './by-downloads.component.html',
  styleUrls: ['./by-downloads.component.css']
})
export class ByDownloadsComponent implements OnInit {

  cards: any = [];
  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards = this.cardsService.getMostDownloadedCards();
  }

}
