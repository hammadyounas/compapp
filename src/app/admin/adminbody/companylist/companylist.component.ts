import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service'
import { FirebaseListObservable } from 'angularfire2/database'
@Component({
  selector: 'companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  data: FirebaseListObservable<any>;
  removeComp: FirebaseListObservable<any>
  removecompjobs: FirebaseListObservable<any>
  removecompapplicants: FirebaseListObservable<any>
  list: any = [];
  profiledata: any = [];
  constructor(
    private _adminservice: AdminService
  ) {
    this.companylist();
   }
   companylist(){
     this.data = this._adminservice.getcompanylist();
     this.data.subscribe(snapshots =>{
       this.list = [];
       this.profiledata = [];
       snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
                this.profiledata.push(obj)
      });
              for (var i = 0; i < this.profiledata.length; i++) {
                console.log('hammad');
                    if (this.profiledata[i].typeuser == 'company') {
                      this.list.push(this.profiledata[i]);  
                      //return 'student';
                        //console.log('student here');
                        
                    }

            }
     });
   }
    removeCompanyApplicants(email){
      console.log('remove comp applicants');
      
      this.removecompapplicants = this._adminservice.removeCompanyApplicants();
      this.removecompapplicants.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
       // console.log(snapshot.$key);
        
       //console.log(snapshot.email);
        if(snapshot.val().companyemail == email){
          //console.log(snapshot.$key);
          //console.log(snapshot.email);
          this.removecompapplicants.remove(snapshot.key).then(check =>{
            console.log('applicants successfuly removed');
            //alert('student successfuly removed');
          });
        }   
      });
    });
    } 
    removecompanyjobpost(email){
      //console.log('check comp job post');
      
      //console.log(email);
      
      this.removecompjobs = this._adminservice.removecompanyjobpost();
       this.removecompjobs.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
       // console.log(snapshot.val().email);
       //console.log('obj');
       
       //console.log(snapshot.key);
       
        if(snapshot.val().email == email){
          console.log(snapshot.key);
          console.log(snapshot.val().email);
          this.removecompjobs.remove(snapshot.key).then(check =>{
            console.log('applicants successfuly removed');
            //alert('student successfuly removed');
          });
        }   
      });
    });
    }   

   deleteCompany(email){
     this.removeCompanyApplicants(email);
      this.removecompanyjobpost(email);
    this.removeComp = this._adminservice.removeCompany();
    this.removeComp.subscribe(snapshots => {
      //this.list = [];
      snapshots.forEach(snapshot =>{
        var obj = snapshot.val();
       // console.log(snapshot.val().email);
        if(snapshot.val().email == email){
          console.log(snapshot.key);
          console.log(snapshot.val().email);
          this.removeComp.remove(snapshot.key).then(check =>{
            
            alert('company successfuly removed');
          });
          
        }
      });       
    });
    
   }
  ngOnInit() {
  }

}
