
const express = require("express");
import users from "./user.js"
const app=express()
app.get("/",(req,res)=>{
    res.send("Server is ready")
})
app.get("/api/user",(req,res)=>{
    res.send(users)
}
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
  
    
})