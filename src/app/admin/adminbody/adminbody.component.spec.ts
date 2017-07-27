import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbodyComponent } from './adminbody.component';

describe('AdminbodyComponent', () => {
  let component: AdminbodyComponent;
  let fixture: ComponentFixture<AdminbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
