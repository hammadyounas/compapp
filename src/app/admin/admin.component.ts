import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('/admin/adminbody');
  }

  students(){
    this.router.navigateByUrl('/admin/adminbody/studentslist');
  }

  applicants(){
    this.router.navigateByUrl('/admin/adminbody/applicantlist');   
  }

  companies(){
    this.router.navigateByUrl('/admin/adminbody/companylist');
  }

  jobs(){
    this.router.navigateByUrl('/admin/adminbody/jobslist');
  }

  logout(){
    this.router.navigateByUrl('/');
  }

}
