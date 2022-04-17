import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitHubApiService } from '../git-hub-api.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
})
export class GithubUserComponent implements OnInit {
  constructor(private gitHubApiService: GitHubApiService) {}

  user;
  repos;
  reposFetched = false;
  dataFetched = false;
  searchTerm: string;
  onsubmit(form: NgForm) {
    this.searchTerm = form.value.userSearch;
    console.log(this.searchTerm);

    this.gitHubApiService.getGithubUser(this.searchTerm).subscribe((data) => {
      this.user = data;
      this.dataFetched = true;
      console.log(data);
    });

    this.gitHubApiService
      .getGithubUserRepos(this.searchTerm)
      .subscribe((data) => {
        this.repos = data;
        this.reposFetched = true;
        console.log(data);
      });

    form.reset();
  }
  ngOnInit() {
    // let user = new GithubUser();
    // this.user = user.userData;
    // console.log(this.user.login);
  }
}
