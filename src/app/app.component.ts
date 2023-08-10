import { Component } from '@angular/core';
import { Istudent } from './module/Istudent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formtask';
  studentarray:Array<Istudent>=[];
  onpersonhand(eve:any){
    this.studentarray.push(eve)

  }
}
