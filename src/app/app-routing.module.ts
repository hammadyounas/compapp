import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import {SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CvComponent} from './cv/cv.component';
import {CompanyComponent} from './company/company.component';
//import { JobformComponent } from './jobform/jobform.component';
import { BodyComponent } from './company/body/body.component';
import { JobformComponent } from './company/body/jobform/jobform.component';
import { ViewpostComponent } from './company/body/viewpost/viewpost.component';
import { CandidateComponent} from './company/body/candidate/candidate.component';
 import { ProfilebodyComponent} from './profile/profilebody/profilebody.component';
import { CvComponent } from './profile/profilebody/cv/cv.component';
import { JobsComponent } from './profile/profilebody/jobs/jobs.component';
import { ApplicantsComponent } from './company/body/applicants/applicants.component';
import { AdminComponent } from './admin/admin.component';
import { AdminbodyComponent } from './admin/adminbody/adminbody.component';
import {ApplicantlistComponent } from './admin/adminbody/applicantlist/applicantlist.component';
import { CompanylistComponent } from './admin/adminbody/companylist/companylist.component';
import { JobslistComponent } from './admin/adminbody/jobslist/jobslist.component';
import { StudentslistComponent } from './admin/adminbody/studentslist/studentslist.component'; 

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'app-form',component: FormComponent },
    {path: 'app-signup-form',component: SignupFormComponent },  
    {path: 'profile', component: ProfileComponent,
    children: [
        {
            path: 'profilebody',
            component: ProfilebodyComponent,
            children: [
                {
                    path: 'app-cv',
                    component: CvComponent
                },
                {
                    path : 'jobs',
                    component: JobsComponent
                }
            ]

        }
    ]
    },
  //  {path: 'cv' , component: CvComponent},
    {path: 'company' , component: CompanyComponent , children: [
        {
            path: 'body',
            component: BodyComponent,
            children: [{
            path: 'app-jobform',
            component: JobformComponent
        },
        {
            path: 'app-viewpost',
            component: ViewpostComponent
        },
        {
            path: 'app-candidate',
            component: CandidateComponent
        },
        {
            path: 'applicants',
            component: ApplicantsComponent
        }
            ]
        }
    ] },
    { path: 'admin' , component: AdminComponent,children: [
        {
            path: 'adminbody',
            component: AdminbodyComponent,
            children: [
                {
                    path: 'applicantlist',
                    component : ApplicantlistComponent
                },
                {
                    path: 'companylist',
                    component: CompanylistComponent
                },
                {
                    path: 'jobslist',
                    component: JobslistComponent
                },
                {
                    path: 'studentslist',
                    component: StudentslistComponent
                }
            ]}
    ] }

]
@NgModule({
    imports: [RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
