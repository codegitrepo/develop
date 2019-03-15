import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathRobotsComponent } from './workpath-robots.component';

describe('WorkpathRobotsComponent', () => {
  let component: WorkpathRobotsComponent;
  let fixture: ComponentFixture<WorkpathRobotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathRobotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
