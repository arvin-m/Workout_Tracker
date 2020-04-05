const express=require("express");
const app=express();
const PORT =process.env.PORT|| 7000;
const mongoose = require("mongoose");
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const MONGODB_URI=process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use(require("./routes/api_routes.js"));
app.use(require("./routes/html_routes.js"));

app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT} ...`);
    
})

