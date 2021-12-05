import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private username:string;
  private userUrl ="https://api.github.com/users/";
  private accessToken = "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";
  private repo: string;

  constructor(private http:HttpClient) { 
    console.log("services is now ready");
    this.username = "Edwike12";
   
  }

  getProfileInfo (){
    return this.http.get<any[]>("https://api.github.com/users/"+ this.username + "?user_Url="+ this.userUrl +"&access_Token=" +this.accessToken)
    
  }

  getProfileRepos(){
    return this.http.get<any[]>("https://api.github.com/users/"+ this.username + "/repos?user_Url="+ this.userUrl +"&access_Token=" +this.accessToken)

  }

    updateProfile(username:string){
    this.username;username;
  }

  updateRepos(repo:string){
    return this.repo =repo;
  }

 
}
