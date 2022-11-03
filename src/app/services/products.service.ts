import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
// Environment
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  loadProducts( from: number = 0 ) {
    return this.http.get(
      `${ base_url }/products?from${ from }`
    )
    .pipe(
      map( (resp: { ok?: boolean | false, total?: number | 0, products?: any[] | [] }) => {
        return {
          ok: resp.ok,
          total: resp.total,
          products: resp.products
        }
      })
    )
  }
}
