import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase ,FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()

export class AdminService{
    cvRemove: FirebaseListObservable<any>
  applyRemove: FirebaseListObservable<any>
    constructor(
        private db: AngularFireDatabase
    ){ }
    students(){
        return this.db.list('/user', {preserveSnapshot: true});
    }
    removeCompanyApplicants(){
        return this.db.list('/applicants',{preserveSnapshot: true})
    }
    removecompanyjobpost(){
        return this.db.list('/postjob', {preserveSnapshot: true})
    }
    getcompanylist(){
        return this.db.list('/user',{preserveSnapshot: true});
    }
    cvremove(){
        return this.db.list('/cvs',{preserveSnapshot: true})
    }
    applyremove(){
        return this.db.list('/applicants',{preserveSnapshot: true});

    }
    removeStudent(email){
        return this.db.list('/user',{preserveSnapshot: true});
    }
    removeCompany(){
        return this.db.list('/user',{preserveSnapshot: true});
    }
    getjobslist(){
        return this.db.list('/postjob',{preserveSnapshot: true});
    }
    removejob(){
        return this.db.list('/postjob',{preserveSnapshot: true});
    }
    applicants(){
        return this.db.list('/applicants',{preserveSnapshot: true});
    }

}