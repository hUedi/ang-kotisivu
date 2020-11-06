/*
Tämä tiedosto esittää valepalvelimen tietokannan sisällön.
Tämä data haetaan http-protokollan välityksellä frontend-sovellukseen.
Tämä poistetaan sitten kun front sovellus on valmis ja voidaan ryhtyä käyttämään 
oikeaa palvelinta.
*/

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mydata } from './dataclasses';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mydatas: Mydata[] = [
      { id: 1, info: 'Opiskelija'},
      { id: 2, info: 'Asuu: Jyväskylässä'},
      { id: 3, info: 'Lempi musiikki: Proge rock'},
      { id: 4, info: 'Lempi soitin: Kitara'},
    ];
    //tähän voidaan laittaa studies taulukko
    return {mydatas};
  }

}