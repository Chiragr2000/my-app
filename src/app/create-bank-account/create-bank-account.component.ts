import { BankAccountsService } from './../bank-accounts.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {

  constructor(private bankAccountsService:BankAccountsService){}
public accountForm: FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
});
create() {

  this.bankAccountsService.createBankAccount(this.accountForm.value).subscribe((data)=>{
    alert("Successfully bank account created")
    this.accountForm.reset()
  },
(error:any)=>{
  alert(error)
})
  }
}
