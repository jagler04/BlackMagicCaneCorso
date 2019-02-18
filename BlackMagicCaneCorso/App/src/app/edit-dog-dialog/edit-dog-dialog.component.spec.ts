import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDogDialogComponent } from './edit-dog-dialog.component';

describe('EditDogDialogComponent', () => {
  let component: EditDogDialogComponent;
  let fixture: ComponentFixture<EditDogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
