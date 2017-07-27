import { Component, OnInit } from '@angular/core';
import { CompService } from '../../../comp.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
   mail;
   post;
   appstate = 'default';
   keepgoing = false;
   tempemail;
   studentcv: FirebaseListObservable<any>
   candidates: FirebaseListObservable<any>
   applicantsarr: any = [];
    postArr: any = [];
   data: FirebaseListObservable<any>
  constructor(public _service: CompService) {
    this.mail = this._service.emitmail()
    this.getpost();
   }
  viewCandidate(title){
    this._service.getTitle(title);
    
    console.log('title is here');
    console.log(title);
    this.candidates =  this._service.getCandidate()
    this.candidates.subscribe(snapshots =>{
      snapshots.forEach(snapshot =>{
        //var obj = snapshot.val();
        if(snapshot.jobtitle == title){
          this.keepgoing = true;
         // this.appstate = 'applicants'
        console.log(snapshot.studentemail);
        this.tempemail = snapshot.studentemail;
        }       
        //this.profiledata.push(obj)
      });

      if(this.keepgoing){
          
          this.appstate = 'applicants'
        console.log(this.tempemail);
        this.studentcv = this._service.getStudentCv();
        this.studentcv.subscribe(studentcvs => {
          this.applicantsarr = [];
          studentcvs.forEach(studentcv => {
            console.log('in candidate');
            var obj = studentcv;
            //console.log(obj);
            if(obj.mail == this.tempemail){
           // console.log('obj mail');
            //console.log(obj);
            this.applicantsarr.push(obj);
            //console.log(this.applicantsarr[0].fullname);
            }
          });
        });
        }
      else{
        console.log('not match');
        alert('did not apply any candidate on this job');
      } 
    });
  }
    goback(){
      this.appstate = 'default';
    }
   getpost(){
     console.log(this.mail);
      this.data = this._service.getpost()
      this.data.subscribe((postdata)=>{
        postdata.forEach(element => {
        //  console.log(element.val());
        this.post = element.val();
        //console.log(this.post);
        if(this.post.email == this.mail){
          this.postArr.push(this.post)
        }
        console.log(this.postArr);
        });
     })

   }
  ngOnInit() {
  }

}
