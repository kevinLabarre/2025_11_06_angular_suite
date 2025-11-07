import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IAccount } from '../../interfaces/IAccount';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/accounts"

  getAllAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.baseUrl)
  }

  addOneAccount(newAccount: IAccount): Observable<IAccount> {
    return this.http.post<IAccount>(this.baseUrl, newAccount)
  }

  deleteOneAccount(accountId: string): Observable<IAccount> {
    return this.http.delete<IAccount>(`${this.baseUrl}/${accountId}`)
  }

  getAccountById(accountId: string): Observable<IAccount> {
    return this.http.get<IAccount>(`${this.baseUrl}/${accountId}`).pipe(
      delay(2000)
    )
  }

  updateOneAccount(account: IAccount): Observable<IAccount> {
    console.log("account", account)

    if (account.id && account.id !== "")
      return this.http.put<IAccount>(`${this.baseUrl}/${account.id}`, account)
    else throw new Error("Id requis pour les mise à jour de compte")
  }

}
