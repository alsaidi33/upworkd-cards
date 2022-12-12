import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title: string | undefined;
  stars: number | undefined;
  description : string | undefined;
  date : Date | undefined;
  downloads : number | undefined;
  commingSoon: boolean | undefined;
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  submit(f: NgForm){
    if(!f.valid){
      return;
    }
    this.cardsService.addCard({
      title: this.title,
      stars: this.stars,
      description: this.description,
      date: this.date,
      downloads: this.downloads,
      commingSoon: this.commingSoon
    }); 
    f.resetForm(); 
  }
}
