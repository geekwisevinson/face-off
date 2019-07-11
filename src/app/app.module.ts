import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './shared/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostFormComponent } from './shared/post-form/post-form.component';
import { FeedComponent } from './shared/feed/feed.component';
import { FeedItemComponent } from './shared/feed-item/feed-item.component';
import { FriendListComponent } from './shared/friend-list/friend-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    PostFormComponent,
    FeedComponent,
    FeedItemComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
