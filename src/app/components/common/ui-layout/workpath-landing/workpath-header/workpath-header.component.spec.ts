import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathHeaderComponent } from './workpath-header.component';

describe('WorkpathHeaderComponent', () => {
  let component: WorkpathHeaderComponent;
  let fixture: ComponentFixture<WorkpathHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
