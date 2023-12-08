import { Component, OnInit } from '@angular/core';
import { ObraService } from './services/obra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TeatroSinFiltros';
  shows: any[] = [];

  constructor(private obraService: ObraService) { }

  ngOnInit() {
    this.obraService.getObras().subscribe(
      (data) => {
        console.log(data);
        this.shows = data;
      },
      (error) => {
        console.error('Error al obtener obras', error);
      }
    );
  }
}

