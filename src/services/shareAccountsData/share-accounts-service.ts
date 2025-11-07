import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAccount } from '../../interfaces/IAccount';

@Injectable({
  providedIn: 'root',
})
export class ShareAccountsService {
  private account = new BehaviorSubject<IAccount>({} as IAccount)

  private accountList = new BehaviorSubject<IAccount[]>([] as IAccount[])

  shareAccount(account: IAccount) {
    this.account.next(account)
  }

  shareAccountList(accounts: IAccount[]) {
    this.accountList.next(accounts)
  }

  accountShareByShareService$ = this.account.asObservable(); // Observable auquel les composant peuvent s'abonner pour avoir accès au compte partagé via ce service
  accountListShareByShareService$ = this.accountList.asObservable();


}
