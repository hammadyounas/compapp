import { Component, OnInit } from '@angular/core';
import { CompService } from '../comp.service'
import { Router } from '@angular/router'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  data: FirebaseListObservable<any>
  profiledata: any = [];
  newobject: any =  [];
  name;
  newVar = "hammad";

  constructor(private _compservice: CompService,
    private router: Router,
    private db: AngularFireDatabase
  ) { 
  }

  ngOnInit() {
  }
  getmail(email) {
    //console.log('send mail');
    this._compservice.sendmail(email);
    console.log('check data');
    this.data = this.db.list('/user', { preserveSnapshot: true });
    this.data.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        //console.log(snapshot.val());
        var obj = snapshot.val();
        this.profiledata.push(obj);
      });
      for (var i = 0; i < this.profiledata.length; i++) {
        if (this.profiledata[i].email == email) {

          this.newobject.push(this.profiledata[i]);
          // console.log('data is here');
         // console.log(this.newobject);
        // console.log(typeof(this.newobject));
         //console.log(this.newobject.name);
        }

      }
    });

    //console.log('data is here');
    console.log(this.newobject);
    //this.newVar = this.newobject[0];
    //console.log(this.newVar);

  }
  checkdata(){
    // console.log('data is here');
    // console.log(this.newobject);

  }
  post() {
    this.router.navigateByUrl('company/body/app-jobform');
  }
  viewpost(){
    this.router.navigateByUrl('/company/body/app-viewpost');
  }
  candidate(){
    this.router.navigateByUrl('/company/body/app-candidate');
  }
  logout() {
    localStorage.removeItem('firebaseToken');
    this.router.navigateByUrl('/');
  }

  clickme() {
      this.newVar = this.newobject.name;
    }

}
