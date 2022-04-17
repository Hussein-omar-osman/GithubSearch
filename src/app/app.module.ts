import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GihubReposComponent } from './gihub-repos/gihub-repos.component';
import { ConfirmPipe } from './confirm.pipe';

@NgModule({
  declarations: [AppComponent, GithubUserComponent, GihubReposComponent, ConfirmPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
