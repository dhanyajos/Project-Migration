import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewstsComponent } from './userviewsts.component';

describe('UserviewstsComponent', () => {
  let component: UserviewstsComponent;
  let fixture: ComponentFixture<UserviewstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewstsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
