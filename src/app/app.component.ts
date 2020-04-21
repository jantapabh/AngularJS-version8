import { Component, OnInit } from '@angular/core';
import { CoronaVirusService } from './corona-virus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  casses: number;
  deaths: number;
  recover: number;
  active: number;
  countries: number;

  constructor(private cvs: CoronaVirusService) {

  }

  ngOnInit() {

    this.cvs.getData().subscribe(datas => {

      console.log(datas);

      this.casses = datas.stats[0];
      this.deaths = datas.stats[1];
      this.recover = datas.stats[2];
      this.active = datas.stats[3];
      this.countries= datas.stats[4];
      
    });
  }
}

