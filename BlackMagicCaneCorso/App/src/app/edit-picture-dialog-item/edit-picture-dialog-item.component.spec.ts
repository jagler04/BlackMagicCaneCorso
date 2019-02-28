import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPictureDialogItemComponent } from './edit-picture-dialog-item.component';

describe('EditPictureDialogItemComponent', () => {
  let component: EditPictureDialogItemComponent;
  let fixture: ComponentFixture<EditPictureDialogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPictureDialogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPictureDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
