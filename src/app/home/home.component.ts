import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string | undefined;
  stars: number | undefined;
  description : string | undefined;
  date : Date | undefined;
  downloads : number | undefined;
  commingSoon: boolean | undefined;
  cards = [ 
    {title: 'Mother Day', stars:5, description: 'For all you\'re done, we should make every day mothers\'s Day!', date: new Date(), downloads: 174, commingSoon: false, },
    {title: 'Happy Birthday', stars:2, description: 'Happy Birthday to my crazy, wonderful, lovely and truly amazing friend.', date: new Date(), downloads: 0, commingSoon: true, }, 
    {title: 'Teacher Day', stars:4, description: 'Thank you for all you have tought me. Happy Teacher Day', date: new Date(), downloads: 95, commingSoon: false, }
  ];
  FilteredCards: any = [];
  mode = 'add';
  constructor() { }

  addCard(){
    this.mode = 'add';
  }

  popularCards(){
    this.mode = 'view';
    this.FilteredCards = this.cards.filter(card => card.stars >= 4);
  }

  mostDownloadedCards(){
    this.mode = 'view';
    this.FilteredCards = this.cards.filter(card => card.downloads > 100);
  }

  commingSoonCards(){
    this.mode = 'view';
    this.FilteredCards = this.cards.filter(card => card.commingSoon == true);
  }

  ngOnInit(): void {
    this.mode = 'view';
    this.popularCards();
  }

  submit(f: NgForm){
    if(!f.valid){
      return;
    }
    this.cards.push({
      title: this.title!,
      stars: this.stars!,
      description: this.description!,
      date: this.date!,
      downloads: this.downloads ?? 0,
      commingSoon: this.commingSoon ?? false
    }); 
    f.resetForm(); 
  }

  logout(){
    window.location.replace("/");
  }

}
