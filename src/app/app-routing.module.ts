import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  
    {
      path:"auth",
     loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
      path:"search",
     loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule)
    },
    {
      path:"paiement",
     loadChildren: () => import('./modules/paiement/paiement.module').then((m) => m.PaiementModule)
    },
    {
      path:"admin",
     loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
    },
    {
      path:"",
     loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
