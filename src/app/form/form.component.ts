import { Component, OnInit , Injectable } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { ProfileComponent } from '../profile/profile.component'
import { CompanyComponent } from '../company/company.component'
import { StudentService } from '../student.service'
import { Router } from '@angular/router' 


@Injectable()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginstate = false;
  value;
  authvalue;
  //temp: FirebaseListObservable<any[]>;
  arr;
   loginForm : FormGroup;
   //root = firebase.database().ref()
  constructor(private log: FormBuilder , 
    private auth: AuthService,
    public _student: StudentService,
    private _profile: ProfileComponent,
    private _company: CompanyComponent,
  private router: Router ) {
    this.loginForm = log.group({
    'email' : 'ty@ty.com',
    'pass' : '123456'
 })
  
    }

    usercheck;
    returnvalue: boolean;
  ngOnInit() {
  }
  submitForm(value: any):void {
    console.log('Reactive form data');
    console.log(value);
    console.log(this.loginForm.value.email);
    //this._profile.getmail(this.loginForm.value.email);
    
    this.auth.login(this.loginForm.value.email, this.loginForm.value.pass);
    this._company.getmail(this.loginForm.value.email);
    this._student.sendmail(this.loginForm.value.email);
  }

}
