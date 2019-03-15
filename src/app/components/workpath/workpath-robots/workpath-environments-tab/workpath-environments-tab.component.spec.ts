import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathEnvironmentsTabComponent } from './workpath-environments-tab.component';

describe('WorkpathEnvironmentsTabComponent', () => {
  let component: WorkpathEnvironmentsTabComponent;
  let fixture: ComponentFixture<WorkpathEnvironmentsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathEnvironmentsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathEnvironmentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
