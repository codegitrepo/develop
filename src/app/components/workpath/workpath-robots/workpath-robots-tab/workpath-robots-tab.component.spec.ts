import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathRobotsTabComponent } from './workpath-robots-tab.component';

describe('WorkpathRobotsTabComponent', () => {
  let component: WorkpathRobotsTabComponent;
  let fixture: ComponentFixture<WorkpathRobotsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathRobotsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathRobotsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
