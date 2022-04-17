import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GitHubApiService {
  constructor(private http: HttpClient) {}

  // userName;
  // getSearchTerm(name: string) {
  //   this.userName = name;
  //   console.log(this.userName);
  // }

  getGithubUser(search) {
    console.log(search);

    return this.http.get(`https://api.github.com/users/${search}`);
  }
  getGithubUserRepos(search) {
    console.log(search);

    return this.http.get(`https://api.github.com/users/${search}/repos`);
  }
}
