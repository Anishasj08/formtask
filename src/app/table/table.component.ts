import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../module/Istudent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() getstudentArray!:Array<Istudent>;
  constructor() { }

  ngOnInit(): void {
  }

}
