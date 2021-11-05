import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  public eventos: any;
  public eventosFiltrador: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  mostraImgs: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value) {
    this._filtroLista = value;
    this.eventosFiltrador = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      ( evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== - 1 ||
                        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== - 1
    );
  }

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:44316/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrador = this.eventos;
      },
      error => console.log(error),

    );
  }

}
