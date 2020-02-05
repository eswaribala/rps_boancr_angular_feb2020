import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AccountsummaryComponent} from "./accountsummary/accountsummary.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {RequestComponent} from "./request/request.component";
import {ChequeComponent} from "./cheque/cheque.component";
import {AddressComponent} from "./address/address.component";


const routes: Routes = [{
  path:"Login",
  component:LoginComponent,

},
  {
    path:"Home",
    component:HomeComponent,
    children:[ {
      path:"AccountSummary",
      component: AccountsummaryComponent,
      children:[{
        path:"Transactions",
        component:TransactionComponent
      }]
    },

      {
        path:"Requests",
        component: RequestComponent,
        children: [{
          path:"Cheque",
          component:ChequeComponent
        },
          {
            path:"Address",
            component:AddressComponent
          },
        ]

      },
      //lazy loading
      {
        path: 'FundTransfer',
        loadChildren: () => import('./fundtransfer/fundtransfer.module')
          .then(m => m.FundTransferModule)
      },]
  },

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login' }




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
