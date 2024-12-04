const express=require("express");
const path = require("path");
const app=express();
const Port=8080;
app.set('view engine', 'ejs');
filepath=path.join(__dirname,"/views/index.ejs")
app.get("/",(req,res)=>{
    let name="Sam"
    let place="Khalistan"
    res.render(filepath,{name,destination:place})
    

    // res.sendFile(filepath)
})
const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good morning";
    } else if (currentHour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
};
app.get("/welcome",(req,res)=>{
    const name="Sam"
    const greeting=getGreeting();
    res.render(filepath,{name,greeting})
})
app.use(express.json())

app.listen(Port, (err) => { 
    if (err) {
        console.log(err);
    } else {
        console.log("listening to port " + Port);
    }
});

