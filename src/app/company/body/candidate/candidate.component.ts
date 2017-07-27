import { Component, OnInit } from '@angular/core';
import { CompService } from '../../../comp.service'
import  { FirebaseListObservable } from 'angularfire2/database'
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  email;
  tempmail;
  temptitle;
  list: any =[];
  profiledata: any = [];
  temp;
  students: FirebaseListObservable<any>
  studentdata: FirebaseListObservable<any>
  data: FirebaseListObservable<any>
  constructor(
    private _compservice: CompService
  ) { 
    this.email = this._compservice.emitmail();
    this.studentlist();
    //this.getapplicants();
  }
  studentlist(){
    this.students = this._compservice.students();
    this.students.subscribe(snapshots => {
      this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
                this.profiledata.push(obj)
      });
              for (var i = 0; i < this.profiledata.length; i++) {
                console.log('hammad');
                    if (this.profiledata[i].typeuser == 'student') {
                      this.list.push(this.profiledata[i].name);  
                      //return 'student';
                        //console.log('student here');
                        
                    }

            }
           // console.log(this.list);
            
    });
  }
  getapplicants(){
    //console.log(this.email);
    this.data =  this._compservice.getApplicantData();
    this.data.subscribe(snapshots =>{
      snapshots.forEach(snapshot => {
       this.temp = snapshot.val();
       this.tempmail = this.temp.studentemail;
       this.temptitle = this.temp.jobtitle;
       
      });
    });
  }
  ngOnInit() {
  }

}
