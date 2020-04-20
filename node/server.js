//Backend
//ใช้ nodemon run backend


const express = require('express')
const app = express();

require('./db')


//สั่งให้ server เปิด db
// mongoose ใช้ Robo3T
// Nodejs ใช้ Postman

const bodyParser = require('body-parser')

//แปลง JSON File ใข้ BosyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Allow client to access cross domain or ip-address
//ส่วนนี้จะอนุญาติให้สามารถเข้าถึงทุกอัน

app.use(function(req, res, next){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Methods', 'GET , POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
;
});

app.get('/', (req, res) => {
    res.send('Hello');
});


app.get('/home', (req, res) => {
    res.send('Hello Home');
});

app.post('/api', (req, res) => {

    const feedback = req.body.feedback;
    const username = req.body.username;
    //req.body.feedBAck คือการใช้ BodyParser ในการอ่าน request ที่เข้ามาและทำการแปลง

    res.json({result: "Success", username: username, feedback: feedback});

});

app.listen(3000, () => {

    console.log("Server is Running at PORT 3000");
})