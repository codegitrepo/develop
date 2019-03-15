import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathSidebarComponent } from './workpath-sidebar.component';

describe('WorkpathSidebarComponent', () => {
  let component: WorkpathSidebarComponent;
  let fixture: ComponentFixture<WorkpathSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
