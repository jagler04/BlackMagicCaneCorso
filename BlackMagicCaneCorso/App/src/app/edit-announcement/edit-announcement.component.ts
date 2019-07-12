import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { MatDialog } from '@angular/material';
import { AddAnnouncementDialogComponent } from '../add-announcement-dialog/add-announcement-dialog.component';
import { AnnouncementModel } from '../Clients/PuppiesClient';
import { UpdateAnnouncementComponent } from '../update-announcement/update-announcement.component';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';

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
  public ShowEditDialog(announcement: AnnouncementModel){
    const dialogRef = this.dialog.open(UpdateAnnouncementComponent, {data: announcement.announcementText});

    dialogRef.afterClosed().subscribe(result => {
      if(result !== announcement.announcementText){
        this.service.Update(announcement.id, result).subscribe(result => { this.Announcements = result;});
        //this.service.Add(result).subscribe(result => { this.Announcements = result;});
      }
    });
  }
  ShowDelete(id: number){
    const dialogRef = this.dialog.open(YesNoDialogComponent, {data: {message: "Are you sure you wish to delete this announcement?"}});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.Delete(id).subscribe(result => { this.Announcements = result;});
        //this.service.Add(result).subscribe(result => { this.Announcements = result;});
      }
    })
  }
}
