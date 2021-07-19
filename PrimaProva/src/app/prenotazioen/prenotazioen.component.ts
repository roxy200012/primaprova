import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Prenotazione } from '../models/prenotazione';

@Component({
  selector: 'app-prenotazioen',
  templateUrl: './prenotazioen.component.html',
  styleUrls: ['./prenotazioen.component.scss']
})
export class PrenotazioenComponent implements OnInit {

  name;
 surname;
 date;
 place;
 type;
 prenotazione:Prenotazione=new Prenotazione();
  constructor(private service:GeneralService) { }
  submit(){
    this.prenotazione.name=this.name;
    this.prenotazione.surname=this.surname;
    this.prenotazione.date=this.date;
    this.prenotazione.place=this.place;
    this.prenotazione.type=this.type
    this.service.postPrenotazione(this.prenotazione).subscribe(()=>{

      
    })
  }
  ngOnInit() {
  }

}
