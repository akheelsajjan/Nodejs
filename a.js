const express = require('express');
const app = express();

let events = require('events');
let EventEmitter = new events.EventEmitter();

EventEmitter.on('welcome',(data) => {
    console.log(data);
});

app.get('/', (req, res)=>{
    user = {
        "name":"Ak"
    }
    res.send("hello")
    EventEmitter.emit('welcome',user);
    console.log("called");
   
})


app.get('/split/name', (req, res) => {
    let newName = [];
    let name = req.query.fullName;
    newName = name.split(' ');
    firstName = newName[0],
        lastName = newName[1];
    let response = {
        "firstName": firstName,
        "lastName": lastName
    };
    res.send(response);


});// end split name

app.get('/calculate/age', (req, res) => {
    date1 = req.query.dob;
    date = new Date(date1);
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay();

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    var age_diff = curr_year - year;
    if (curr_month < month) {
        age_diff = age_diff - 1;
    } else if (curr_month == month && curr_date < day) {
        age_diff = age_diff - 1;
    }
    res.send({ "age": age_diff })

});// end calculate age



app.listen(3000, () => {

    console.log("df")
   
})
