import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathControlSidebarComponent } from './workpath-control-sidebar.component';

describe('WorkpathControlSidebarComponent', () => {
  let component: WorkpathControlSidebarComponent;
  let fixture: ComponentFixture<WorkpathControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
