import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule , MdRadioModule , MdCheckbox ,MdInputModule  } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import {FormBuilder , FormGroup } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component' 
import { AppRoutingModule } from './app-routing.module'
import { AuthService } from './auth.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { CvComponent } from './cv/cv.component';
import { CompanyComponent } from './company/company.component';
//import { JobformComponent } from './jobform/jobform.component';
import { CompService } from './comp.service';
import { BodyComponent } from './company/body/body.component'
import { JobformComponent} from './company/body/jobform/jobform.component';
import { ViewpostComponent } from './company/body/viewpost/viewpost.component';
import { CandidateComponent } from './company/body/candidate/candidate.component';
import { ProfilebodyComponent } from './profile/profilebody/profilebody.component';
import { CvComponent } from './profile/profilebody/cv/cv.component';
import { JobsComponent } from './profile/profilebody/jobs/jobs.component';
import { StudentService } from './student.service';
import { ApplicantsComponent } from './company/body/applicants/applicants.component';
import { AdminComponent } from './admin/admin.component';
import { AdminbodyComponent } from './admin/adminbody/adminbody.component';
import { StudentslistComponent } from './admin/adminbody/studentslist/studentslist.component';
import { ApplicantlistComponent } from './admin/adminbody/applicantlist/applicantlist.component';
import { CompanylistComponent } from './admin/adminbody/companylist/companylist.component';
import { JobslistComponent } from './admin/adminbody/jobslist/jobslist.component';
import { AdminService } from './admin.service'


// const appRoutes: Routes = [
//    {path:'login' ,component: FormComponent }
//   ]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    SignupFormComponent,
    ProfileComponent,
    CvComponent,
    CompanyComponent,
    JobformComponent,
    BodyComponent,
    ViewpostComponent,
    CandidateComponent,
    ProfilebodyComponent,
    JobsComponent,
    ApplicantsComponent,
    AdminComponent,
    AdminbodyComponent,
    StudentslistComponent,
    ApplicantlistComponent,
    CompanylistComponent,
    JobslistComponent,
    
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
     MdCheckboxModule,
     MdInputModule,
    FormsModule,
    ReactiveFormsModule,
   // AngularFireAuth,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
     AngularFireAuthModule,
     MdRadioModule,
     AppRoutingModule,
     NoopAnimationsModule,
     BrowserAnimationsModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule
  ],
  providers: [AngularFireAuth,
    AuthService,
    CompService,
    StudentService,
    AdminService,
    ProfileComponent,
    CompanyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
