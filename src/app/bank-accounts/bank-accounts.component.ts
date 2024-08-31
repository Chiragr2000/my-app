import { count } from 'rxjs';
import { BankAccountsService } from './../bank-accounts.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css'],
})
export class BankAccountsComponent {
  public bankAccountsDetails: any = [];
  public term: string = '';
  public count: number = 0;
  public page: number = 0;

  constructor(private bankAccountsService: BankAccountsService) {
    bankAccountsService.getAccountsDetails().subscribe({
      next: (data: any) => {
        this.bankAccountsDetails = data;
      },
      error: (error: any) => {
        alert('internal server error');
      },
      complete: () => {
        console.log('bank accounts details fetched successfully');
      },
    });
  }
  filter() {
    this.bankAccountsService.getFilteredAccounts(this.term).subscribe({
      next: (data) => {
        this.bankAccountsDetails = data;
      },
      error: (error: any) => {
        alert('internal server error');
      },
      complete: () => {
        console.log('data has been fetched succesfully');
      },
    });
  }

  pagination(data: any) {
    console.log(data);
    this.count = data.count;
     this.page = data.page;
    this.bankAccountsService
      .getPaginationAccounts(this.count, this.page)
      .subscribe(
        (data) => {
          this.bankAccountsDetails = data;
        },
        (error: any) => {
          alert('internal server error');
        }
      );
  }
  nextPage() {
    this.page++;
    this.bankAccountsService.nextPage(this.count,this.page).subscribe(
      (data:any) => {
        this.bankAccountsDetails = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );

    }
}
