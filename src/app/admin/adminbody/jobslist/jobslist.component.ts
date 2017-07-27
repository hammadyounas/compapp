import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable } from 'angularfire2/database'
import { AdminService } from '../../../admin.service'
@Component({
  selector: 'jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {
  jobsdata: FirebaseListObservable<any>
  jobsremove: FirebaseListObservable<any>
  jobsarr: any = [];
  job;
  constructor(private _adminService: AdminService) {
    this.getjobslist();
   }
  getjobslist(){
    this.jobsdata = this._adminService.getjobslist();
    this.jobsdata.subscribe(snapshots => {
        this.jobsarr = [];
      snapshots.forEach(snapshot => {
        this.job = snapshot.val();
        //console.log(this.job);
        this.jobsarr.push(snapshot.val());
      });
    });
  }
  removeJob(email,title){
   //console.log(email);
    //console.log(title);
    this.jobsremove = this._adminService.removejob();
    this.jobsremove.subscribe(snapshots =>{
      snapshots.forEach(snapshot => {
        //console.log('title');
        //console.log(title);
         //console.log(snapshot.val().title);
        if(snapshot.val().email == email){
          if(snapshot.val().title == title){
          console.log('key');
          console.log(snapshot.key);
          console.log(email);
          console.log(title);
          this.jobsremove.remove(snapshot.key).then(check =>{
            alert('removed successfuly');
          });
          }
        }
      });
    });    
  }

  ngOnInit() {
  }

}
