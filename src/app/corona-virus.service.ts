import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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

    return this.http.get(environment.apiUrl, this.options).pipe(map((datas:any) => {

      // console.log(datas);

      const stats = datas.affected_countries;
      const update_time = datas.statistic_taken_at;

  

      let totalCasees = 0;
      let totalDeaths = 0;
      let totalRecover = 0;
      let totalActive = 0;
      let totalCountries = stats.length;

     for (const stat of stats) {

      // console.log(stat);
      

      totalCasees += parseInt(stat.casses);
      totalDeaths += parseInt(stat.deaths);
      totalRecover += parseInt(stat.total_recovered);
      totalActive += parseInt(stat.active_cases);

       
     }
   

      return { stats: [totalCasees, totalDeaths, totalRecover, totalActive, totalCountries], update: update_time };


    }));
  }
}
