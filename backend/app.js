import express from "express"
import cors from "cors"
const app = express();
const port = 3000;


//Middlewares 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
})); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.send("We are at AI backend lets make this platform !");
})



//router
import journalroute from "./router/uploadroute.js";



app.use("/upload",journalroute);

app.listen(port,()=>{
    console.log(`App is listening to http://localhost:${port}`);
    

})

