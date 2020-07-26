import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { movie } from '../model/movie';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { movieService } from '../services/movie.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['id','title' , 'created', 'status', 'actions'];
  dataSource: MatTableDataSource<movie>;

  constructor(
    public dialog: MatDialog,
    private movieService: movieService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<movie>(this.getData());
  }

  getData() {
    return this.movieService.getmovies();
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  confirm(obj: movie) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '540px',
      data: { title: obj.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(obj);
      }
    });
  }

  confirmEdit(obj: movie) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '540px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         this.edit(result.id,result);
      }
    });
  }


  confirmAdd() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '540px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         this.add(result);
      }
    });
  }

  add(obj: movie) {
    this.movieService.storeMovie(obj);
    this.dataSource._updateChangeSubscription();
    this.snackBar.open('pelicula agregada', 'descartar', {
      duration: 2000,
    });
  }


  edit(id,obj: movie) {
    this.movieService.updateMovie(id,obj);
    this.dataSource._updateChangeSubscription();
    this.snackBar.open('pelicula actualizada', 'descartar', {
      duration: 2000,
    });
  }

  delete(obj: movie) {
    this.movieService.deleteMovie(obj);
    this.dataSource._updateChangeSubscription();
    this.snackBar.open('pelicula eliminada', 'descartar', {
      duration: 2000,
    });
  }

}