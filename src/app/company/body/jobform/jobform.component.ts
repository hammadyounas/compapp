import { Component, OnInit , Input } from '@angular/core';
import {Router} from '@angular/router'
import { CompService } from '../../../comp.service'
@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  //@Input() _service : CompService
  mail;
  check;

  constructor(private router: Router,
  private _service: CompService
  ) { }

  ngOnInit() {
  }
  addpostdata(title,text){
    console.log(title);
    
    console.log('post');
    this.mail = this._service.emitmail()
    console.log(this.mail);
    
     this._service.addpost(title,text,this.mail)
  //  .then((user)=>
  // {
  //   this.router.navigateByUrl('/company/body');
  // }) 
} 

}
