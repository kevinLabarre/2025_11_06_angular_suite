import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) news!: INews
}
