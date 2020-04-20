import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{


  title = 'JANTAPA';

  constructor(private http:HttpClient) {


  }

//ส่วน onSubmit ในฟอร์มที่เราใส่ไว้
  onSubmit(data){

    alert(JSON.stringify(data));
    // let postData = {username: data.email, feedback: data.feedback};
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
      alert(JSON.stringify(result));
    })
  }

  //เป็นการยิงข้อมูลไปยังฝั่งแสดงผลบน server โดยกำหนดให้ยิงไปที่ สนแฟส้นหะ ที่กำหนดได้

  ngOnInit(): void {

  }

}

//Type Script