import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebodyComponent } from './profilebody.component';

describe('ProfilebodyComponent', () => {
  let component: ProfilebodyComponent;
  let fixture: ComponentFixture<ProfilebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
