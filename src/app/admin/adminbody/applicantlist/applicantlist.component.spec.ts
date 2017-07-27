import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantlistComponent } from './applicantlist.component';

describe('ApplicantlistComponent', () => {
  let component: ApplicantlistComponent;
  let fixture: ComponentFixture<ApplicantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
