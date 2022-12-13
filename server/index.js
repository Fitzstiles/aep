const express = require("express");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://austin:austinfitz@cluster0.akkx3mk.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.listen(4000, () => {
  console.log("listening on port 4000");
});

app.post("/signup", (req, res) => {
  res.json({ mssg: "welcome" });
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("aep");
    const users = database.collection("users");

    const returnedUser = await users.find().toArray();
    res.send(returnedUser);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
