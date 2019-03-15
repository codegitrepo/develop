import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathTabsComponent } from './workpath-tabs.component';

describe('WorkpathTabsComponent', () => {
  let component: WorkpathTabsComponent;
  let fixture: ComponentFixture<WorkpathTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
