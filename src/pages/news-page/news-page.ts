import { Component } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { IResponsePaginate } from '../../interfaces/IResponsePaginate';
import { NewsCard } from "../../components/news-card/news-card";
import { PaginationButtons } from "../../components/pagination-buttons/pagination-buttons";

@Component({
  selector: 'app-news-page',
  imports: [NewsCard, PaginationButtons],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css',
})
export class NewsPage {
  constructor(private NewsService: NewsService) { }

  nbrNewsPerPage = 6;

  responseApi?: IResponsePaginate<INews>

  ngOnInit(): void {
    this.loadProduct(1, this.nbrNewsPerPage)
  }

  loadProduct(page: number, perPage: number): void {
    this.NewsService.getPaginateNews(page, perPage).subscribe({
      next: (resp) => {
        console.log(resp)
        this.responseApi = resp
      },
      error: (err) => console.error("erreur de chargement des actualités", err)
    })
  }

  handlePrev() {
    if (this.responseApi) {
      if (this.responseApi.prev)
        this.loadProduct(this.responseApi.prev, this.nbrNewsPerPage)
    }
  }

  handleNext() {
    if (this.responseApi)
      if (this.responseApi.next)
        this.loadProduct(this.responseApi.next, this.nbrNewsPerPage)
  }

  get paginationInfo(): string {
    let result = ''
    if (this.responseApi) {
      const nbrPage = this.responseApi.next ? this.responseApi.next - 1 : this.responseApi.prev + 1
      result = `${nbrPage} / ${this.responseApi.pages}`
    }
    return result
  }

  handleClickOnPaginationButton(pageNbr: number): void {
    if (this.responseApi)
      this.loadProduct(pageNbr, this.nbrNewsPerPage)
  }

}
