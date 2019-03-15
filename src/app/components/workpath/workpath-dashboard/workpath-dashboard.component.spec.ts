import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathDashboardComponent } from './workpath-dashboard.component';

describe('WorkpathDashboardComponent', () => {
  let component: WorkpathDashboardComponent;
  let fixture: ComponentFixture<WorkpathDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
