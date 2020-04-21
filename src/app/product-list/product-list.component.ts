import {Component} from '@angular/core';
//เป็นการอิมพอร์ต

import { products} from '../products';
//ไฟบ์ products เก็บข้อมูลสินค้า อิมพอร์ตไฟล์ product


//ส่วน setup component ในโปรเจ็คแต่ละอัน
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent{

    
    products = products;

    share(){

        window.alert('The Products Has Been Share');
    }
}
