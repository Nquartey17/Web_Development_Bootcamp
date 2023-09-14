//jshint esversion:6

const express = require("express");

const app = express();

/*what should happen when a browser gets in touch with server
get(location, callback function)
request from location, respond to location
*/
app.get("/", function(req, res) {
    res.send("<h1>THE ONE PIECE IS REAL</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at @: ");
});

app.get("/about", function(req,res) {
    res.send("WHO HIT ME? WHO HIT ME? WHO HIT ME?")
});

app.get("/hobbies", function(req, res) {
    res.send("THE ZURP")
});

//listen on port #
app.listen(3000), function() {
    console.log("Sever started on port 3000");
};