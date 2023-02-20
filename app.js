const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const path=require("path");
const youtubeRouter=require("./routes/youtube")



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs");
app.set("views","./views");


app.use("/youtube",youtubeRouter)

app.listen(3000);