import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from '../module/Istudent';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
@Output() person=new EventEmitter<Istudent>();


  constructor() { }
@ViewChild("fnamecontrol") fnamecontrol!:ElementRef;
@ViewChild("lnamecontrol") lnamecontrol!:ElementRef;
@ViewChild("emailcontrol") emailcontrol!:ElementRef;
@ViewChild("contactcontrol") contactcontrol!:ElementRef;

  ngOnInit(): void {
  }
  Addonhand(eve:any){
let fname=this.fnamecontrol.nativeElement.value
let lname=this.lnamecontrol.nativeElement.value
let email=this.emailcontrol.nativeElement.value
let contact=this.contactcontrol.nativeElement.value
let obj={
  fname:fname,
  lname:lname,
  email:email,
  contact:contact,
}

this.person.emit(obj)
this.fnamecontrol.nativeElement.value=""
this.lnamecontrol.nativeElement.value=""
this.emailcontrol.nativeElement.value=""
this.contactcontrol.nativeElement.value=""
  }

}
