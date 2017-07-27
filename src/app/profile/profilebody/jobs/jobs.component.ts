import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../student.service'
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  email;
  jobsarr: any = [];
  job;
  jobsdata: FirebaseListObservable<any>
  constructor(private _studentservice: StudentService) {
    this.email = this._studentservice.emitmail();
    this.getjobs()
  }
  getjobs() {
    
    //this.jobsarr.splice(0,this.jobsarr.length)
    console.log('jobs in get job');
    this.jobsdata = this._studentservice.getjobs();
    this.jobsdata.subscribe(snapshots => {
        this.jobsarr = [];
      snapshots.forEach(snapshot => {
        this.job = snapshot.val();
        //console.log(this.job);
        this.jobsarr.push(this.job);
      });
    });
  }
  apply(emailtext, titletext) {
    this._studentservice.apply(emailtext, titletext);
  }
  ngOnInit() {
  }

}
