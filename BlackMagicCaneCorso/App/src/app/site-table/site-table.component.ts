import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SiteTableDataSource } from './site-table-datasource';

@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.css'],
})
export class SiteTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SiteTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SiteTableDataSource(this.paginator, this.sort);
  }
}
