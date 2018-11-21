import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.css']
})
export class NotFoundErrorComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  /**
   * método para, dada la ubicación actual en la aplicación, volver a la página anterior.
   */
  goBack(): void {
    this.location.back();
  }
}
