import express from "express"
import cors from "cors"
import journalroute from "./router/uploadroute.js";

const app = express();
const port = 8000;


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("We are at AI backend lets make this platform!");
})


app.use("/upload", journalroute);


app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ 
        success: false, 
        msg: err.message || "Internal server error" 
    });
});

app.listen(port, () => {
    console.log(`App is listening to http://localhost:${port}`);
})
