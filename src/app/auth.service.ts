
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()

export class AuthService {
    profiledata: any = [];
    usid;
    index;
    checkid;
    datainfo: any;
    authvalue;
    userkey;
    typeuser;
    
    Reg: FirebaseObjectObservable<any[]>;
    data: FirebaseListObservable<any[]>;
    newob: FirebaseListObservable<any>
    constructor(private db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth) { }
    returntype: boolean;
    login(email, pass): any {
        //this.profiledata.splice(0, this.profiledata.length);
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, pass)
            .then((user) => {
                //this.loginstate = true;
                //console.log(this.loginstate);
                this.authvalue = user.uid;
                localStorage.setItem('firebaseToken', this.authvalue);
                console.log(this.authvalue);
                console.log('loged in');


                //console.log('hammad');
                this.finduser(email);
                //console.log(this.profiledata);


                // this.router.navigateByUrl('/profile');
            })
            .catch(error =>{
                alert('password is invalid');
                this.router.navigateByUrl('/app-form');
            })
        // .catch(error => {
        //     console.log(error)
        //     this.returntype = false;
        // });



        //console.log(this.returntype);
        ///console.log('return type');
        //return this.returntype;
    }
    i: number = 0;
    finduser(email) {
        console.log('check');
        this.data = this.db.list('/user', { preserveSnapshot: true });
        this.data.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                console.log(snapshot.key);
                //console.log(snapshot.val());
                var obj = snapshot.val();
                //console.log(obj);
                this.profiledata.push(obj)
                //console.log(this.profiledata.length);
                //this.profiledata.push(snapshot.val());
            });
            console.log(this.profiledata.length);
            for (var i = 0; i < this.profiledata.length; i++) {
               // console.log('hammad');
                if (this.profiledata[i].email == email) {
                    if (this.profiledata[i].typeuser == 'student') {
                        //return 'student';
                        //console.log('student here');
                        
                        this.router.navigateByUrl('/profile/profilebody');
                    }
                    else if (this.profiledata[i].typeuser == 'company') {
                        this.router.navigateByUrl('/company/body');
                        //return 'company';
                    }
                    else if (this.profiledata[i].typeuser == 'admin') {
                        this.router.navigateByUrl('/admin/adminbody');
                        //return 'company';
                    }
                }

            }
        });

        //for(var i in this.profiledata){
        //console.log(this.profiledata.length);
        //console.log('hammad');

    }
    

    signup(email, pass,uname, gender, school, comp, compName, schoolName) {
      // this.pushSignupData(uname, gender, school, comp, compName, schoolName, email);
        console.log(email);
        console.log(pass)
        const auth = firebase.auth();
        this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            this.authvalue = user.uid;
            localStorage.setItem('firebaseToken', this.authvalue);
            console.log(this.authvalue);
            console.log('created');
            this.pushSignupData(uname, gender, school, comp, compName, schoolName, email);
        })
        .catch( error =>{
            alert('already created enter and email');
         });
    }
    
    pushSignupData(uname, gender, school, comp, compName, schoolName, email) {
        console.log('studentvalue');
        this.usid = this.afAuth.auth.currentUser.uid;
        localStorage.setItem('firebaseToken', this.usid);
        console.log(this.usid);
        //this.Reg = this.db.object('/reg/' + this.afAuth.auth.currentUser.uid);
        this.newob = this.db.list('/user');
        //this.companyReg = this.db.object('/companyReg/'+this.afAuth.auth.currentUser.uid);
        if (school == true) {
            this.typeuser = 'student';
            this.newob.push({
                name: uname, gender: gender, school: school, comp: comp, schoolname: schoolName,
                email: email, typeuser: this.typeuser
            })
                .then((user) => {
                    console.log('done school');
                      this.router.navigateByUrl('/profile')
                });
        }
        else {
            this.typeuser = 'company';
            this.newob.push({
                name: uname, gender: gender, school: school, comp: comp, compname: compName,
                email: email, typeuser: this.typeuser
            })
                .then((user) => { console.log('done company'); this.router.navigateByUrl('/company'); });

        }
    }


    // checkuser(mail) {

    //     // for(var i=0; i<this.profiledata.length; i++){
    //     console.log('getprofile');    
    //     // }
    // }
}


