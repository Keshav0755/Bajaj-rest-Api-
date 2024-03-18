const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.json());

app.post("/bfhl", (req, res) => {
   Array arr = req.body;
    Boolean success_Rate = false; 
    Array arr2 = []; 
    Array arr3  = []; 
   Array arr4 = []; 
   if(arr.length > 0){
     res.send("success_Rate : " true); 
   }
   
   const Name = "john_doe_17091999",
   res.send(Name); 
   
    const Roll_Number = "ABCD123",
    res.send(Roll_Number);
    
    const email : "john@xyz.com”,
    res.send(email)
   
   
   for(int i=0;i<arr.length;i++){
     if(arr[i] == Number){
       if(arr[i] %2 == 0){
         arr2.push([arr[i]]); 
         res.send ("Array of Even Numbers" : arr2);
       }
       else {
         arr3.push([arr[i]]); 
         res.send("Arrays Oof odd numbers" : arr3);
       }
     }
     else {
       arr.toUpperCase(arr[i]); 
        res.send("Alphabets in Array"); 
       
     }
   }
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});




