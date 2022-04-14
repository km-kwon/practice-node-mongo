import express from "express";
const app = express();

const handleServer = () =>{
    console.log("open server to 4000");
}

app.listen(4000, handleServer);