import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ServicesService:ServicesService ) {
    this.ServicesService.getProfileInfo().subscribe(profile=> {
      console.log(profile);
      
    });
  }

  ngOnInit(): void {
  }

}
