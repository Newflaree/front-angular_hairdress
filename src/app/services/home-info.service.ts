import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// Environment
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HomeInfoService {
  constructor(
    private http: HttpClient
  ) { }

  loadHomeInfo() {
    return this.http.get(
      `${ base_url }/home-info`
    )
    .pipe(
      map( (resp: any) => {
        return {
          ok: resp.ok,
          currentHomeInfo: resp.currentHomeInfo
        }
      })
    )
  }
}
