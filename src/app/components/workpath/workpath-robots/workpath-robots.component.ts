import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workpath-robots',
  templateUrl: './workpath-robots.component.html',
  styleUrls: ['./workpath-robots.component.scss']
})
export class WorkpathRobotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('In robots component');
  }

}
