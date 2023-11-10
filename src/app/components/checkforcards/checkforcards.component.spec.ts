import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckforcardsComponent } from './checkforcards.component';

describe('CheckforcardsComponent', () => {
  let component: CheckforcardsComponent;
  let fixture: ComponentFixture<CheckforcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckforcardsComponent]
    });
    fixture = TestBed.createComponent(CheckforcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
