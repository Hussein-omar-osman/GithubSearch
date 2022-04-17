import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GihubReposComponent } from './gihub-repos/gihub-repos.component';
import { GithubUserComponent } from './github-user/github-user.component';

const routes: Routes = [
  {
    path: 'githubUser',
    component: GithubUserComponent,
  },
  {
    path: 'githubRepos',
    component: GihubReposComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
