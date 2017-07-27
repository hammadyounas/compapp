import { Component, OnInit } from '@angular/core';
import { CompService } from '../../../comp.service'

@Component({
  selector: 'applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  title;
  constructor() { }

  ngOnInit() {
  }

}
