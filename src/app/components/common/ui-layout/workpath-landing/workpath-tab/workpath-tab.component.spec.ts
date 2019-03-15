import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathTabComponent } from './workpath-tab.component';

describe('WorkpathTabComponent', () => {
  let component: WorkpathTabComponent;
  let fixture: ComponentFixture<WorkpathTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
