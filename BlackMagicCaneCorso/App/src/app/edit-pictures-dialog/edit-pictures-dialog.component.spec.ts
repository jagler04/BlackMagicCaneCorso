import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPicturesDialogComponent } from './edit-pictures-dialog.component';

describe('EditPicturesDialogComponent', () => {
  let component: EditPicturesDialogComponent;
  let fixture: ComponentFixture<EditPicturesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPicturesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPicturesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
