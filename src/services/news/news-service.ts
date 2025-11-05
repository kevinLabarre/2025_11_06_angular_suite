import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/actualites"

  getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.baseUrl)
  }

}
