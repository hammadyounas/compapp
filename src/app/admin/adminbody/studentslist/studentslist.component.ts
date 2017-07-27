import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service'
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  students: FirebaseListObservable<any>
  studentRemove: FirebaseListObservable<any>
  list: any = [];
  profiledata: any = [];
  cvRemove: FirebaseListObservable<any>
  applyRemove: FirebaseListObservable<any>
  constructor(
    private _adminService: AdminService
  ) {
    this.getStudentList();
   }
  getStudentList(){
    this.students = this._adminService.students();
    this.students.subscribe(snapshots => {
      this.list = [];
      this.profiledata = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
                this.profiledata.push(obj)
      });
              for (var i = 0; i < this.profiledata.length; i++) {
               // console.log('hammad');
                    if (this.profiledata[i].typeuser == 'student') {
                      this.list.push(this.profiledata[i]);  
                      //return 'student';
                        //console.log('student here');
                        
                    }

            }
           // console.log(this.list);
            
    });
  }
  removecv(email){
    console.log('check cv remove');
    
    this.cvRemove = this._adminService.cvremove();
        this.cvRemove.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(element =>{
        var obj = element.val();
       // console.log(element.val());
        //console.log(element.key);
        
        if(element.val().mail == email){
          console.log(element.key);
          console.log(element.val().email);
          this.cvRemove.remove(element.key).then(check =>{
            console.log('cv successfuly removed');
            
            //alert('student successfuly removed');
          });
        }   
      });
    });
  }
  removeapplicant(email){
    console.log('check remove applicant');
    
    this.applyRemove = this._adminService.applyremove();
        this.applyRemove.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
       // console.log(snapshot.val().email);
        if(snapshot.val().studentemail == email){
          console.log(snapshot.key);
          console.log(snapshot.val().email);
          this.applyRemove.remove(snapshot.key).then(check =>{
            console.log('apply successfuly removed');
            //alert('student successfuly removed');
          });
        }   
      });
    });
  }
  deleteStudent(email){
    //console.log(email);
    this.removecv(email);
    this.removeapplicant(email);
     this.studentRemove = this._adminService.removeStudent(email);
    this.studentRemove.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
       // console.log(snapshot.val().email);
        if(snapshot.val().email == email){
          console.log(snapshot.key);
          console.log(snapshot.val().email);
          this.studentRemove.remove(snapshot.key).then(check =>{
            
            alert('student successfuly removed');
          });
          
        }
      });       
    });
    
  }

  ngOnInit() {
  }

}
