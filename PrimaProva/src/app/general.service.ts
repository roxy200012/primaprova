import { Injectable } from '@angular/core';
import { offerta } from './models/offerte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenotazione } from './models/prenotazione';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  apiUrl="http://localhost:3001/offerte";
  apiUrlPrenotazione="http://localhost:3001/prenotazione"
  constructor(private http:HttpClient) { }
  getOfferte():Observable<offerta[]>{
    return this.http.get<offerta[]>(this.apiUrl);

  }
  getOfferta(id:string):Observable<offerta>{
    return this.http.get<offerta>(this.apiUrl+'/'+id);
  }
  postPrenotazione(prenotazione:Prenotazione):Observable<Prenotazione>{
   return this.http.post<Prenotazione>(this.apiUrlPrenotazione,prenotazione);
  }
}
