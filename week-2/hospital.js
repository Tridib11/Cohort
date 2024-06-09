const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [{ healthy: false }, { healthy: true }, { healthy: true }],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});



app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
      healthy:isHealthy
    })
    res.json({
      msg:"Done!"
    })
})


app.put("/",(req,res)=>{
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true
  }
  res.json({})
})


app.delete("/",(req,res)=>{
  let newKidneys=[]
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
  }

  users[0].kidneys=newKidneys

  res.json({
    msg:"DB Updated"
  })
})
app.listen(3000, () => {
  console.log("Server started");
});
