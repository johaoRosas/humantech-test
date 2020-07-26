import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { movie, STATUS } from '../model/movie';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  
})
export class EditDialogComponent implements OnInit {
	statuses: string[] = [STATUS.active, STATUS.inactive];
	form: FormGroup;
	title: string;

    constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<EditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public movie: movie) {

			this.title  = (movie.id> 0)? 'Actualizar' :'Agregar' ;

			this.form = fb.group({
				id : [movie.id, Validators.required],
				title: [movie.title, Validators.required],
				body: [movie.body],
				status: [movie.status,Validators.required],
				created:[ movie.created, Validators.required],
			});
		}

  ngOnInit() {
  }

  save() {
	this.dialogRef.close(this.form.value);
}

	close() {
		this.dialogRef.close();
	}



}
