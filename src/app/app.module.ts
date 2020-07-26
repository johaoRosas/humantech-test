import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatNativeDateModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { movieService } from './services/movie.service';
import { MaxCharPipe } from './shared/pipes.pipe';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent, 
    ConfirmDialogComponent, 
    MaxCharPipe,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
	MatSnackBarModule,
	MatDatepickerModule,
	MatMomentDateModule,
	MatNativeDateModule,
	MatSidenavModule,
	MatListModule
  ],
  providers: [movieService, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, EditDialogComponent]
})
export class AppModule { }
