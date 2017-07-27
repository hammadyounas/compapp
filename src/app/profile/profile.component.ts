import { Component, OnInit } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileData;
    usid;
    id;    
  constructor(private router: Router , private _authservice: AuthService) { }
   
  ngOnInit() {

    
  //this.id  = localStorage.getItem('firebaseToken');
  //this.profileData = 
  

  }
 // getmail(mail){}
  
home(){
  this.router.navigateByUrl('profile/profilebody');
}
cv(){
  this.router.navigateByUrl('profile/profilebody/app-cv');
}
jobs(){
  this.router.navigateByUrl('profile/profilebody/jobs');
}
 logout(){
     localStorage.removeItem('firebaseToken');
     this.router.navigateByUrl('/');
   }

}
