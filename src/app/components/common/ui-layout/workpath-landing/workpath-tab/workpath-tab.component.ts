import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workpath-tab',
  templateUrl: './workpath-tab.component.html',
  styleUrls: ['./workpath-tab.component.scss']
})
export class WorkpathTabComponent implements OnInit {

  @Input() title: string;
  @Input() active = false;
  
  constructor() { }

  ngOnInit() {
  }

}
