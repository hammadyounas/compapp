import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import {MdButtonModule, MdCheckboxModule , MdRadioModule , MdCheckbox }  from '@angular/material';
import { AuthService } from '../auth.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm : FormGroup;
  authvalue;
  
  newob: FirebaseListObservable<any>;
 // data = 
 authState : any = null;

  constructor(private log: FormBuilder,
          private auth: AuthService,
        private db: AngularFireDatabase
        ) {
    this.signupForm = log.group({
      'username' : '',
    'email' : '',
    'pass' : '',
    'gender' : '',
    'school' : false,
    'company' : false,
    'compname' : '',
    'schoolname' : ''

 })
   }

  ngOnInit() {
  }

  submitForm(value: any):void {
    console.log('Reactive form data');
    
    console.log(value);
    //console.log(value.email);
    this.authvalue = this.auth.signup(this.signupForm.value.email, this.signupForm.value.pass,
    this.signupForm.value.username,this.signupForm.value.gender,
      this.signupForm.value.school,this.signupForm.value.company,
      this.signupForm.value.compname,this.signupForm.value.schoolname
    );
    // this.auth.pushSignupData(this.signupForm.value.username,this.signupForm.value.gender,
    //   this.signupForm.value.school,this.signupForm.value.company,
    //   this.signupForm.value.compname,this.signupForm.value.schoolname,
    //   this.signupForm.value.email)
    //this.authvalue(this.signupForm.value);
  }

  
}
