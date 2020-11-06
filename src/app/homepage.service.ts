import { Injectable } from '@angular/core';
//httpClient tarvitaan datan lähettämiseen palvelimelle ja se nhakemiseen palvelimelta
import {HttpClient} from '@angular/common/http';
// palvelimelta tuleva data toimitetaan komponentille observable eli reaktiivisesti.
import { Observable } from 'rxjs';
//tietotyyppi
import { Mydata } from './dataclasses';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  //saadaan tieto valepalvelimelta
  mydataurl = 'api/mydatas';
  //studiesurl = 'api/studies'

  // liitetään eli injektoidaan httpclient olio tähän luokkaan konstruktorin argumenttina (dependency injection)
  constructor(private http: HttpClient) { }

  // tehdään palvelimelle pyyntö jolla haetaan data observablena
  getMydata(): Observable <Mydata[]> {
    return this.http.get<Mydata[]>(this.mydataurl);
    //virheenkäsittely voidaan tehdä tähän


  }


}
