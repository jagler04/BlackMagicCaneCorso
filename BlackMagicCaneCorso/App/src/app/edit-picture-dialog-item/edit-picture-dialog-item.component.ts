import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';
import { PictureInfo, DogInfo } from '../Clients/PuppiesClient';
import { PictureService } from '../Services/picture.service';

@Component({
  selector: 'edit-picture-dialog-item',
  templateUrl: './edit-picture-dialog-item.component.html',
  styleUrls: ['./edit-picture-dialog-item.component.css']
})
export class EditPictureDialogItemComponent implements OnInit {

  @Input()
  picture: PictureInfo;
  @Input()
  dog: DogInfo;

  constructor(public dialog: MatDialog, private pictureService: PictureService) { }

  ngOnInit() {
  }

  ShowDelete(){
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {message: "Are you sure you wish to delete this image?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.pictureService.DelegePicture(this.picture);
      }
    });
  }
}
