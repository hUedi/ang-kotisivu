/*
    Angular-sovelluksen sisään tulevan datan pitää olla vahvasti tyypitettyä
    jotta ei tule mitään väärinkäsityksiä sen suhteen miten sisään tulevaa dataa
    käsitellään. Niimpä sovelluksen datalle tehdään tietomalli joka kertoo
    millaista data on. Tietomalli esitetään luokkien avulla. Luokissa kerrotaan
    millaisia ominaisuuksia sovelluksen datan sisältävillä olioilla pitää olla.
    Luokkien propertyillä on TS tietotyypit. Tässä tapauksessa kaikki luokat ovat
    samanlaisia eli niissä on vain propertyt id ja info, joten periaatteessa
    pärjättäsiiin yhdellä luokalla, mutta nyt luokat voi myöhemmin muokata
    erillaisiksi jos on tarpeen
*/

class Mydata {
    id: number;
    info: string;
}

class Study {
    id: number;
    info: string;
}

class Hobby {
    id: number;
    info: string;
}

export {Mydata, Study, Hobby};