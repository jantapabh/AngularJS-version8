import { Component, OnInit } from '@angular/core';
import { CoronaVirusService } from './corona-virus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';

  constructor(private cvs: CoronaVirusService) {

  }

  ngOnInit() {

    this.cvs.getData();

  }
}

