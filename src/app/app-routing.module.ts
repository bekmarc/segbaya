import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  
    {
      path:"auth",
     loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
      path:"home",
     loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
