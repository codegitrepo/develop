export class WorkPathTab {
    constructor(public tabIndex:number,
                public tabName:string,
                public routerLink:string,
                public queryParams: any,
                public isSelected:Boolean,
                public isHidden: Boolean) {}
  }