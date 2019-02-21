import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIIComponent } from './app-ii.component';

describe('AppIIComponent', () => {
  let component: AppIIComponent;
  let fixture: ComponentFixture<AppIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
