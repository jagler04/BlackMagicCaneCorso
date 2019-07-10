import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { MatDialog } from '@angular/material';
import { AddAnnouncementDialogComponent } from '../add-announcement-dialog/add-announcement-dialog.component';
import { AnnouncementModel } from '../Clients/PuppiesClient';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

  public Announcements: AnnouncementModel[];
  constructor(private service: AnnouncementService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.Get().subscribe(result => {
      this.Announcements = result;
    });
  }

  public ShowAddDialog(){
    const dialogRef = this.dialog.open(AddAnnouncementDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.service.Add(result).subscribe(result => { this.Announcements = result;});
      }
    });
  }
}
