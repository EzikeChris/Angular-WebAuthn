import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

// add your angular routes
const routes: Routes = [
  // components within the parent app component
  {   
    path: 'public', 
    component: PublicComponent,
    // Home(child)Component nested within the public component
    children: [
      {path: '', component: HomeComponent},
      {path: 'Login', component: LoginComponent}
    ]
     },
  {path: 'secure', component: SecureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
