
const express=require("express");
const app = express();
const path =require("path");
const bodyparser=require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post',{useNewUrlParser: true});

const port=5500;

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    textarea: String
  });

//   app.use('/static', express.static('/static'));
//   app.use(express.urlencoded());

  const contact = mongoose.model('contact', contactSchema);

  var urlencodedParser = bodyparser.urlencoded({ extended: false })
 
//   console.log("my name is arbaaz");

  app.post('/post',urlencodedParser, (req, res) => {
    // res.send("POST Request Called")
    console.log("my name is arbaaz");
    var myData = new contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
  })});

  app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});
