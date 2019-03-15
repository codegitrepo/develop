import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { WorkpathTabComponent } from '../workpath-tab/workpath-tab.component';

@Component({
  selector: 'app-workpath-tabs',
  templateUrl: './workpath-tabs.component.html',
  styleUrls: ['./workpath-tabs.component.scss']
})
export class WorkpathTabsComponent implements OnInit {
  @ContentChildren(WorkpathTabComponent)
  tabs: QueryList<WorkpathTabComponent>;

  constructor() {}

  ngOnInit() {}

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: WorkpathTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
