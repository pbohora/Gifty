const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users= require('./router/user')

 const uri="mongodb+srv://dhiraj:nepalese@cluster0-kk1eg.mongodb.net/test?retryWrites=true"

mongoose.connect(
  uri,                                                             //"mongodb://pradip:pradip123@ds013545.mlab.com:13545/gifty-database"
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', users);



app.listen(4000, () => {
  console.log("now listening on port 4000");
})