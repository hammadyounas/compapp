//import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class CompService {
    email;
    title;
    data: FirebaseListObservable<any>
    profiledata: any = [];
    newobject;
    post: FirebaseListObservable<any>
    //applicantdata: FirebaseListObservable<any>
    constructor(private db: AngularFireDatabase,
    public router: Router
    ) {
    }
    getdata(email) {
        // console.log('check data');

        // this.db.list('/user', { preserveSnapshot: true })
        // this.data.subscribe(snapshots => {
        //     snapshots.forEach(snapshot => {
        //         var obj = snapshot.val();
        //         this.profiledata.push(obj)
        //     });
        //     for (var i = 0; i < this.profiledata.length; i++) {

        //         if (this.profiledata[i].email == email) {


        //             this.newobject = this.profiledata[i];
        //             console.log('this is obj');

        //             return this.newobject;
        //         }

        //     }
        // });
    }
    emitmail(){
        //console.log('mail return');
        
        //console.log(this.email);
        return this.email;
    }
    sendmail(email){
        this.email = email;
        console.log('mail here');
        
        console.log(this.email);
    }
    addpost(title, text, mail):any {

        console.log('addpost');
        this.post = this.db.list('postjob');
        this.post.push({
            email: this.email, title: title, discp: text
        }).then((submit)=>{
            alert('job posted');
            this.router.navigateByUrl('/company/body');
           // return submit;
           
        });
        // this.router.navigateByUrl('/company');
        //return Promise.resolve("");

    }
    getTitle(title){
        this.title = title;
    }
    emitTitle(){
        return this.title;
    }
    getStudentCv(){
        return this.db.list('/cvs');
    }
    getCandidate(){
        return this.db.list('/applicants');
    }
    students(){
        return this.db.list('/user',{preserveSnapshot: true});
    }
    getApplicantData(){
      return this.db.list('/applicants',{preserveSnapshot: true})  
    }
    getpost(){
        return this.db.list('/postjob',{preserveSnapshot: true})
    }
}