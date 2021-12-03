import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private username:string;
  private userUrl ="https://api.github.com/users/";
  private accessToken = "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";

  constructor(private http:HttpClient) { 
    console.log("services is now ready");
    this.username = 'Edwike12';
   
  }

  getProfileInfo (){
    return this.http.get("https://api.github.com/users/"+ this.username + "?user_Url="+ this.userUrl +"&access_Token=" +this.accessToken)
    
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?user_Url="+ this.userUrl +"&access_Token=" +this.accessToken)

  }

  updateProfile(username:string){
    this.username;username;
  }

 
}
