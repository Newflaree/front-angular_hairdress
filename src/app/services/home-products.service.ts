import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// Environment
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor(
    private http: HttpClient
  ) { }

  loadHomeProducts() {
    return this.http.get(
      `${ base_url }/home-products`
    )
    .pipe(
      map( (resp: any) => {
        return {
          ok: resp.ok,
          currentHomeProducts: resp.homeProducts
        }
      })
    )
  }
}
