import { Client } from "pg";
const client=new Client({
  connectionString:"postgresql://cohort_owner:dHn9z4ToxuaG@ep-wild-unit-a5tgec3a.us-east-2.aws.neon.tech/cohort?sslmode=require"
})
//lines added to be deleted after exam
console.log("Pushing")
console.log("")

async function insertData(username: string, email: string, password: string) {
  try {
    await client.connect(); // Ensure client connection is established

    const insertQuery=`INSERT INTO users (username,email,password) VALUES($1,$2,$3)`;
    const values=[username,email,password]  
    const res=await client.query(insertQuery,values)
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);