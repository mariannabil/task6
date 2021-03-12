import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { EditprofileComponent } from './pages/user/editprofile/editprofile.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ShowusersComponent } from './pages/showusers/showusers.component';
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { AddcatComponent } from './pages/admin/addcat/addcat.component';
import { ShowcatComponent } from './pages/admin/showcat/showcat.component';
import { EditcatComponent } from './pages/admin/editcat/editcat.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Error404Component } from './pages/error404/error404.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SingleUserComponent } from './single-user/single-user.component'
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
   
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditprofileComponent,
    AdduserComponent,
    ShowusersComponent,
    AddadminComponent,
    AddcatComponent,
    ShowcatComponent,
    EditcatComponent,
    SidebarComponent,
    Error404Component,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    SingleUserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
       BrowserAnimationsModule,
      AccordionModule.forRoot()
   
 

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
