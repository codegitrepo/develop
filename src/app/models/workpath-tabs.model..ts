import { WorkPathTab } from './workpath-tab.model';


export class WorkPathTabs {
  tabs: WorkPathTab[];
  additionalParams: any;

  constructor(public tabHeading:string) {
    this.tabs = [];
    this.additionalParams = {
      headerPreference: 'default'
    };
  }

  selectTab(tabIndex: number) {
    this.tabs.forEach((tab, index) => {
      if (index === tabIndex) {
        tab.isSelected = true;
      }
      else {
        tab.isSelected = true;
      }
    });
  }
  
}
