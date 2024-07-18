import { Client } from "pg";
const client=new Client({
  connectionString:"postgresql://cohort_owner:dHn9z4ToxuaG@ep-wild-unit-a5tgec3a.us-east-2.aws.neon.tech/cohort?sslmode=require"
})

client.connect()