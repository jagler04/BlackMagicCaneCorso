import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyApplicationComponent } from './puppy-application.component';

describe('PuppyApplicationComponent', () => {
  let component: PuppyApplicationComponent;
  let fixture: ComponentFixture<PuppyApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
