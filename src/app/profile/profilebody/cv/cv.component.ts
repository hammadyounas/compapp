import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { AuthService } from '../auth.service'
import { StudentService } from '../../../student.service'

@Component({
  selector: 'cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
cvform : FormGroup;
  constructor(private fb: FormBuilder,
  public _student: StudentService  
  ) {
    this.cvform = fb.group({
      'name' : '',
      'CNIC' : '',
      'desig' : '',
      'inst' : '',
      'numb' : ''
    })
   }
  submitForm(value: any){
    //console.log('cvform');
    
    //console.log(this.cvform.value);
    this._student.pushcv(this.cvform.value);
    
  }
  

  ngOnInit() {
  }
  sub(){
    //this.auth.update(this.cvform.value.name,this.cvform.value.CNIC,this.cvform.value.desig,this.cvform.value.inst);
  }
}