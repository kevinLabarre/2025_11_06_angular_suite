import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../services/account/account-service';
import { IAccount } from '../../interfaces/IAccount';
import { get } from 'http';

@Component({
  selector: 'app-add-account',
  imports: [ReactiveFormsModule],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {

  @Output() accountAdded = new EventEmitter<IAccount>();

  constructor(private service: AccountService) { }

  accountForm = new FormGroup({
    accountNumber: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    solde: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  handleSubmit() {
    if (this.accountForm.valid) {

      console.log("Formulaire valide: ", this.accountForm.value)

      const result = this.accountForm.value

      const account: IAccount = {
        accountNumber: result.accountNumber!,
        accountType: result.accountType as "COURANT",
        solde: Number(result.solde),
        lastTransactionDate: new Date()
      }

      this.service.addOneAccount(account).subscribe({
        next: (resp) => this.accountAdded.emit(resp)
      })

    } else console.error("Formulaire non valide")
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

}
