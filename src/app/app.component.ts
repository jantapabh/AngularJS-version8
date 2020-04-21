import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{


  title = 'JANTAPA';

//ส่วน onSubmit ในฟอร์มที่เราใส่ไว
//เป็นการยิงข้อมูลไปยังฝั่งแสดงผลบน server โดยกำหนดให้ยิงไปที่ สนแฟส้นหะ ที่กำหนดได้

  ngOnInit(): void {


  }

}

//Type Script