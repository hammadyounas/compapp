import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AdminService } from '../../../admin.service';
import {Location} from '@angular/common'

@Component({
  selector: 'applicantlist',
  templateUrl: './applicantlist.component.html',
  styleUrls: ['./applicantlist.component.css']
})
export class ApplicantlistComponent implements OnInit {
  applicantlist: FirebaseListObservable<any>
  compname: FirebaseListObservable<any>
  studentname: FirebaseListObservable<any>
   obj = {
     title: '',
     studentname: ''
  };
    listarr: any = [];
    temp1;
  constructor(private _adminService: AdminService,
  private location: Location
  ) { 
    this.getApplicants();
  }
  getApplicants(){
    console.log('check applicant');
    
    this.applicantlist = this._adminService.applicants();
    this.applicantlist.subscribe(snapshots =>{
      snapshots.forEach(snapshot => {
      
      this.obj.title = snapshot.val().jobtitle;
      //console.log(snapshot.val().jobtitle);
      //console.log(snapshot.val().studentemail);
      this.getstudentname(snapshot.val().studentemail,snapshot.val().jobtitle)
    //    this.studentname = this._adminService.students();
    // this.studentname.subscribe( name =>{
    //   name.forEach(element => {
    //     if(element.val().email == snapshot.val().studentemail){
    //      // console.log(element.val().name);
    //       this.obj.studentname = element.val().name;
    //       this.arr.push(this.obj)
    //       console.log(this.arr);
    //       //console.log(this.obj.studentname);
          
          
    //       //return snapshot.val().name;
    //     }
    //   });
    // });   
      });
    })
  }
  getcompanyname(email): any{
    console.log(email);
    this.compname = this._adminService.getcompanylist();
    this.compname.subscribe( snapshots =>{
      snapshots.forEach(snapshot => {
        if(snapshot.val().email == email){
          console.log(snapshot.val().compname);
          this.temp1 = snapshot.val().compname;
          //return snapshot.val().name;
        }
      });
    });
    //return 
  }
  getstudentname(email,title): any{
    
       this.studentname = this._adminService.students();
    this.studentname.subscribe( name =>{
      //this.obj.title = '';
      //this.obj.studentname = '';
      name.forEach(element => {
        this.obj={
          title: '',
     studentname: ''
        }
        if(element.val().email == email){
          console.log('check if ');
        //this.obj.title = null;
      //this.obj.studentname = null;
          // console.log(email);
          // console.log(title);
          // console.log(element.val().name);
          
          
         // console.log(element.val().name);
         this.obj.title = title;
          this.obj.studentname = element.val().name;
          console.log(this.obj);
         this.listarr.push(this.obj);
          console.log(this.listarr);
          
          //this.arr.push(this.obj)
          //console.log(this.arr);
          //return true;
          //console.log(this.obj.studentname);
          
          
          //return snapshot.val().name;
        }
      });
    });  
  }
  goback(){
    this.location.back();
  }
  ngOnInit() {
  }

}
