
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {SingleUserComponent} from './single-user/single-user.component'



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"listUser",component:ListUserComponent,pathMatch:'full'},
  {path:"NewUser",component:AddUserComponent,pathMatch:'full'},
  {path:"Edit/:id",component:EditUserComponent,pathMatch:'full'},
  {path:":id",component:SingleUserComponent,pathMatch:'full'},
  {path:"about",component:AboutComponent},

  {path:"login",component:LoginComponent},
   {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
