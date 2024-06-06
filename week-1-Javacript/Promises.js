const fs=require("fs")

function promise(cb){
  fs.readFile("lol.txt","utf-8",function(err,data){
    cb(data)
  })
}

function onDone(data){
  console.log(data)
}


promise(onDone)