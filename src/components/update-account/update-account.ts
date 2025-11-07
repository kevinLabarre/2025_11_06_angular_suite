import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AccountService } from '../../services/account/account-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAccount } from '../../interfaces/IAccount';
import { ShareAccountsService } from '../../services/shareAccountsData/share-accounts-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-account',
  imports: [ReactiveFormsModule],
  templateUrl: './update-account.html',
  styleUrl: './update-account.css',
})
export class UpdateAccount implements OnInit, OnChanges, OnDestroy {

  @Input({ required: true }) accountToUpdate!: IAccount

  constructor(private service: AccountService, private shareService: ShareAccountsService) { }

  accountList?: IAccount[] // Liste de comptes affichées sur la page principale. On en a besoin pour la mettre à jour lors des updates

  subscribtion: Subscription = new Subscription()

  ngOnInit(): void {
    this.setAccountList()
  }

  setAccountList() {
    this.subscribtion = this.shareService.accountListShareByShareService$.subscribe(resp => this.accountList = resp)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes)
    if (changes['accountToUpdate']) // On rentrera dans ce IF à chaque changement de notre input 'accountToUpdate'
    {
      // this.accountForm.get('accountNumber')!.setValue(this.accountToUpdate.accountNumber) // Pour pré-remplir les champs un par un

      // this.accountForm.reset({
      //   accountNumber: this.accountToUpdate.accountNumber,
      //   accountType: this.accountToUpdate.accountType,
      //   solde: String(this.accountToUpdate.solde)
      // })

      this.accountForm.reset({ ...this.accountToUpdate, solde: String(this.accountToUpdate.solde) }) // Equivalent au code ci-dessus
    }
  }

  accountForm = new FormGroup({
    accountNumber: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    solde: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  handleSubmit() {
    console.log("submit !!")

    if (this.accountForm.valid) {

      const resultForm = this.accountForm.value

      const account: IAccount = {
        accountNumber: resultForm.accountNumber!,
        accountType: resultForm.accountType as "COURANT",
        solde: Number(resultForm.solde),

        // Ci-desssous, les éléments mappés sans le formulaire ( on remet l'id et la lastTransactionDate du produit à modifier)
        id: this.accountToUpdate.id,
        lastTransactionDate: this.accountToUpdate.lastTransactionDate
      }

      this.service.updateOneAccount(account).subscribe({
        next: (resp) => {
          console.log("mis à jour OK ", resp)
          this.updateAccountsList(resp)
        },
        error: (err) => console.error("erreur de mise à jour du compte", err)
      })
    }
  }

  updateAccountsList(updatedAccount: IAccount) {
    if (this.accountList) {
      // const result = this.accountList.map((account) => {
      //   if (updatedAccount.id === account.id) {
      //     return updatedAccount
      //   } else return account
      // })

      const result = this.accountList.map((account) => updatedAccount.id === account.id ? updatedAccount : account)
      this.shareService.shareAccountList(result)
    }
  }


  get accountNumberError() {

    const control = this.accountForm.get('accountNumber')
    const errors = control!.errors
    const touched = control!.touched


    if (errors)
      if (errors['required'] && touched)
        return "champ obligatoire"

    return null
  }

  get accountTypeError() {
    const control = this.accountForm.get('accountType')
    const errors = control!.errors
    const touched = control!.touched

    if (errors)
      if (errors['required'] && touched)
        return "champ obligatoire"

    return null
  }

  get soldeNumberError() {
    const control = this.accountForm.get('solde')
    const errors = control!.errors
    const touched = control!.touched

    if (errors)
      if (touched) {
        if (errors['required'])
          return "champ obligatoire"
        else if (errors['min'])
          return "Solde doit etre superieur a 0"
      }

    return null
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }

}
