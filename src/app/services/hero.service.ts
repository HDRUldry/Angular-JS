import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from '../models/hero';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

   constructor(private httpCLient: HttpClient) { }

// Affiche tout les Pokemon (liste)

  getHeroes(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key)
  return this.httpCLient.get<hero[]>(environment.api.url+'Pokemon',{'headers':headers})

    // return this.headers;

  }

//Top heros s'affiche sur le dashboard

  getTopHeroes(): Observable<hero[]>{

    const headers= new HttpHeaders().set("apikey",environment.api.key).set("Range","0-3")
  return this.httpCLient.get<hero[]>(environment.api.url+'Pokemon',{'headers':headers})

    // return this.headers.slice(0,40);
  }

getHero(id: number): Observable<hero[]>{

  const headers= new HttpHeaders().set("apikey",environment.api.key)
return this.httpCLient.get<hero[]>(environment.api.url+'Pokemon',{'headers':headers})
// return this.headers.find(
//   (h: hero) => h.id == id
;

}

getTable(): Observable<hero[]>{

  const headers= new HttpHeaders().set("apikey",environment.api.key)
return this.httpCLient.get<hero[]>(environment.api.url+'Pokemon',{'headers':headers}
)
}

}