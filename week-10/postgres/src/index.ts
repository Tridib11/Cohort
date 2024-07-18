import { Client } from "pg";
const client=new Client({
  connectionString:"postgresql://cohort_owner:dHn9z4ToxuaG@ep-wild-unit-a5tgec3a.us-east-2.aws.neon.tech/cohort?sslmode=require"
})


// async function createUsersTable(){
//   await client.connect()
//   const result=await client.query(`
//           CREATE TABLE users (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );    
//     `)
//     console.log(result)

// }


// createUsersTable()


// async function insertData(){
//   try{

//     await client.connect()
//     const insertQuery=`INSERT INTO users(username,email,password) VALUES ('username2', 'user3@example.com', 'user_password');`
//     const res=await client.query(insertQuery)
//     console.log("Insertion success ",res)
//   }

//   catch(err){
//     console.log(err)
//   }

//   finally{
//     await client.end()
//   }

// }


// insertData()



async function displayData(){
  try{
    await client.connect()
    const displayQuery=`SELECT * FROM users;`
    const res=await client.query(displayQuery)
    console.log(res)
  }
  catch(err){
    console.log(err)
  }

  finally{
    await client.end()
  }
}


displayData()
