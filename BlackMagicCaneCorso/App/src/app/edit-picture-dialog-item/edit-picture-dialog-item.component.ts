import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-edit-picture-dialog-item',
  templateUrl: './edit-picture-dialog-item.component.html',
  styleUrls: ['./edit-picture-dialog-item.component.css']
})
export class EditPictureDialogItemComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ShowDelete(){
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {message: "Are you sure you wish to delete this image?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      }
    });
  }
}
