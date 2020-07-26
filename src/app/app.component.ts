import { Component, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
	@Input() sidebarOpen = false;
  title = "Hola Mundo";

  showSideBar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  mobileQuery: MediaQueryList;

  fillerNav = [
	  'Dashboard',
	  'Pelìculas',
	  'Turnos',
	  'Administradores',
	  'Perfil',
	  'Cerrar Sesión'
  ];

 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
}