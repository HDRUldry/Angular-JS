import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { hero } from '../models/hero';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

   constructor(private httpClient: HttpClient) { }

// Affiche tout les Pokemon Sinnoh (liste)

  getPokemonSinnoh(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key)
  return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon?Region=eq.Sinnoh&select=*',{'headers':headers})

    // return this.headers;

  }

  // Affiche tout les Pokemon Sinnoh (liste)

  getPokemonKanto(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key)
  return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon?Region=eq.Kanto&select=*',{'headers':headers})

    // return this.headers;

  }

  // Affiche tout les Pokemon Sinnoh (liste)

  getPokemonHoenn(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key)
  return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon?Region=eq.Hoenn&select=*',{'headers':headers})

    // return this.headers;

  }

  getAllPokemon(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key)
  return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon',{'headers':headers})

  }
//Top heros s'affiche sur le dashboard

  getTopPokemon(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key).set("Range","0-3")
  return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon',{'headers':headers})

    // return this.headers.slice(0,40);
  }


// getTable(): Observable<hero[]>{

//   const headers= new HttpHeaders().set("apikey",environment.api.key)
// return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon',{'headers':headers}
// )
// }

addPokemon(credentials: {name?: string | null | undefined, Region?: string | null | undefined, Element?: string | null | undefined, description?: string | null | undefined}): Observable<any> {

  const headers = new HttpHeaders().set("apikey", environment.api.key)

  return this.httpClient.post(environment.api.urlRest+'Pokemon', credentials, {"headers": headers}

  );

}


getHero(id: number): Observable<hero[]>{

  const headers= new HttpHeaders().set("apikey",environment.api.key)
return this.httpClient.get<hero[]>(environment.api.urlRest+'Pokemon?id=eq.'+id+'&select=*',{'headers':headers})
// return this.headers.find(
//   (h: hero) => h.id == id
;

}

}
