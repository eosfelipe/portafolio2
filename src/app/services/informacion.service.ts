import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  carga_firebase:boolean = false;
  equipo:any[] = [];

  constructor( public htt:Http ) {
    this.getInfo_sitio();
    this.getInfo_firebase();

  }

  getInfo_sitio(){
    this.htt.get("assets/data/info.pagina.json")
            .subscribe( data=>{
              // console.log(data.json());
              this.cargada = true;
              this.info = data.json();
            })
  }

  getInfo_firebase(){
    this.htt.get("https://portafolioweb-49a24.firebaseio.com/equipo.json")
            .subscribe( data=>{
              // console.log(data.json());
              this.carga_firebase = true;
              this.equipo = data.json();
            })
  }

}
