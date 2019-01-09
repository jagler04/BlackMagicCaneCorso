import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedStandardComponent } from './breed-standard.component';

describe('BreedStandardComponent', () => {
  let component: BreedStandardComponent;
  let fixture: ComponentFixture<BreedStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
