//Backend
//ใช้ nodemon run backend


const express = require('express')
const app = express();
const bodyParser = require('body-parser')

//แปลง JSON File ใข้ BosyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.get('/', (req, res) => {
    res.send('Hello');
});


app.get('/home', (req, res) => {
    res.send('Hello Home');
});

app.post('/api', (req, res) => {

    const feedback = req.body.feedback;
    //req.body.feedBAck คือการใช้ BodyParser ในการอ่าน request ที่เข้ามาและทำการแปลง

    res.end("Feedback : " + feedback);

});

app.listen(3000, () => {

    console.log("Server is Running at PORT 3000");
})