import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
@Injectable()
export class StudentService {
    email;
    obj;
    keepgoing = false;
    applycheck = false;
    checkmail: FirebaseListObservable<any[]>
    push: FirebaseListObservable<any[]>
    applyjob: FirebaseListObservable<any>
    constructor(public db: AngularFireDatabase,
        public router: Router
    ) { }
    sendmail(mail) {
        this.email = mail;

    }
    emitmail() {
        return this.email;
    }
    getjobs() {
        return this.db.list('/postjob', { preserveSnapshot: true });
    }
    pushcv(cvform: any) {
        console.log('cvvalue');
        console.log(cvform.numb);
        this.push = this.db.list('/cvs');
        this.checkmail = this.db.list('/cvs', { preserveSnapshot: true })
        this.checkmail.subscribe(snapshots => {
            // console.log(cvdata.val());
            snapshots.forEach(snapshot => {
                // console.log('cv mail');
                this.obj = snapshot.val();
                //console.log(this.obj.mail);
                if (this.obj.mail == this.email) {
                    console.log('keepgoing');
                    this.keepgoing = true;
                }


            });
            if (this.keepgoing == true) {
            alert('you have already entered your cv, wanna change contact to your admin!');
            this.router.navigateByUrl('/profile/profilebody');
        }
        else {
            this.push.push({
                mail: this.email, fullname: cvform.name, cnic: cvform.CNIC, desig: cvform.desig, inst: cvform.inst, numb: cvform.numb,
            }).then((user) => {
                console.log('done cv');
                alert('CV Submited');
                this.router.navigateByUrl('/profile/profilebody');
                this.keepgoing = false;
            })
        }
        })
        
    }
    apply(emailtext, titletext) {
        console.log('student mail');
        console.log(this.email);
        console.log('title here');
        console.log(titletext);
        console.log('apply email here');
        console.log(emailtext);
        this.push = this.db.list('/applicants');
        this.applyjob = this.db.list('/applicants',{preserveSnapshot: true});
        this.applyjob.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                if(snapshot.val().companyemail == emailtext){
                    if(snapshot.val().jobtitle == titletext){
                        console.log('check apply');
                        
                        this.applycheck = true;
                    }
                }
            });
        });
        if(this.applycheck == true){
            alert('you have already aplied on this job');
            this.router.navigateByUrl('profile/profilebody/jobs');
        }
        else{
        this.push.push({
            companyemail: emailtext, jobtitle: titletext, studentemail: this.email
        }).then(user => {
            alert('apply successfull');
        })
        }
    }
}