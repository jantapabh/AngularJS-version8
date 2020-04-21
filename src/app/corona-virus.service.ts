import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoronaVirusService {

  options = {
    headers: new HttpHeaders({
      "x-rapidapi-host": environment.apiHost,
      "x-rapidapi-key": environment.apiKey
    })
  };

  constructor(private http: HttpClient) {

  }

  getData() {
    this.http.get(environment.apiUrl, this.options).subscribe((datas: any) => {
      console.log(datas);
    });
  }
}
