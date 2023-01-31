import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  private _eventos: any = [];
  public eventosFiltrador: any = [];
  widthImg = 150;
  marginImg = 2;
  mostraImgs = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value) {
    this._filtroLista = value;
    this.eventosFiltrador = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this._eventos;
  }

  filtrarEventos(filtro: string): any {
    filtro = filtro.toLocaleLowerCase();
    return this._eventos.filter(
      ( evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtro) !== - 1 ||
                        evento.local.toLocaleLowerCase().indexOf(filtro) !== - 1
    );
  }

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:44316/api/eventos').subscribe(
      response => {
        this._eventos = response;
        this.eventosFiltrador = this._eventos;
      },
      error => console.log(error),

    );
  }

}
