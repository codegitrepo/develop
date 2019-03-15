import { Component, OnInit } from '@angular/core';
import { localizedText } from 'src/app/constants/workpath-i18n';


@Component({
  selector: 'app-workpath-footer',
  templateUrl: './workpath-footer.component.html',
  styleUrls: ['./workpath-footer.component.scss']
})
export class WorkpathFooterComponent implements OnInit {

  displayText: any;

  constructor() { }

  ngOnInit() {
    this.displayText = localizedText;
  }

}
