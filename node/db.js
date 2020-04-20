var mongoose = require('mongoose')

//รับ module 
//codemobiles_com ชื่อดาต้าเบส
// 
mongoose.connect('mongodb://127.0.0.1/codemobiles_com', { userNewUrlParser: true })


mongoose.connection.on('connected', function () {
    console.log('Mongoose Default Connection open');

});

//ถ้าเชื่อมต่อฐานข้อมูลได้จะแสดงข้อความ connect

mongoose.connection.on('Error', function (err) {

    console.log('Mongoose Default Connection error: ', + err);

});
//ถ้าเชื่อมต่อฐานข้อมูลไม่ได้จะแสดงข้อความ Error


mongoose.connection.on('Disconnect', function () {

    console.log('Moongoose Default connection Disconnect');

});

//ถ้ายกเลิกเชื่อมต่อฐานข้อมูลจะแสดงข้อความ Disconnect

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Moongoose Default connection disconnected through app termination');
        process.exit(0)
    });
});

//ใข้ Moongoose ในการจัดการพวกฐานข้อมูล