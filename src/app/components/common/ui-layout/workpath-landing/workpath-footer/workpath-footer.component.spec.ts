import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpathFooterComponent } from './workpath-footer.component';

describe('WorkpathFooterComponent', () => {
  let component: WorkpathFooterComponent;
  let fixture: ComponentFixture<WorkpathFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpathFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpathFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
