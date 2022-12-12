import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards = [ 
    {title: 'Mother Day', stars:5, description: 'For all you\'re done, we should make every day mothers\'s Day!', date: new Date(), downloads: 174, commingSoon: false, },
    {title: 'Happy Birthday', stars:2, description: 'Happy Birthday to my crazy, wonderful, lovely and truly amazing friend.', date: new Date(), downloads: 0, commingSoon: true, }, 
    {title: 'Teacher Day', stars:4, description: 'Thank you for all you have tought me. Happy Teacher Day', date: new Date(), downloads: 95, commingSoon: false, }
  ];
  constructor() { }

  addCard(card: any){
    this.cards.push(card);
  }

  getPopularCards(){
    return this.cards.filter(card => card.stars >= 4);
  }

  getMostDownloadedCards(){
    return this.cards.filter(card => card.downloads > 100);
  }

  getCommingSoonCards(){
    return this.cards.filter(card => card.commingSoon == true);
  }
}
