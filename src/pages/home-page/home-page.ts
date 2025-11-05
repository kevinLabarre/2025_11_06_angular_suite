import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { NewsCard } from "../../components/news-card/news-card";

@Component({
  selector: 'app-home-page',
  imports: [NewsCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  constructor(private NewsService: NewsService) { }

  newsList: INews[] = [];

  ngOnInit(): void {
    this.NewsService.getAllNews().subscribe({
      next: (resp) => {
        console.log(resp)
        this.newsList = resp
      },
      error: (err) => console.error("erreur de chargement des actualités", err)
    })
  }
}
