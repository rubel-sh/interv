// MongoDB Cred
/*
Username: text
Password: FDKpLrPEe7cuqlzK
*/

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

// Variables
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());

const uri =
  "mongodb+srv://text:FDKpLrPEe7cuqlzK@cluster0.f3qt6qk.mongodb.net/?retryWrites=true&w=majority";

// Connect to DB
const client = new MongoClient(uri, console.log("Connected"));
const connectDB = () => {
  try {
    // const client = new MongoClient(uri, console.log("Connected"));
    client.connect;
  } catch (err) {
    console.log(err);
  }
};

// Collections
const blogsCollections = client.db("test").collection("blogs");

// Endpoints

app.get("/", async (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.get("/blogs", async (req, res) => {
  try {
    const allBlogs = await blogsCollections.find({}).toArray();
    res.send(allBlogs);
  } catch (err) {
    console.log(err);
  }
});

const dummyData = [
  {
    imagelink: "https://xsgames.co/randomusers/assets/avatars/male/73.jpg",
    blogTitle: "Blog title 1",
    blogDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fugiat quia minus minima consequatur deleniti facilis id sequi, ullam quidem?",
  },
  {
    imagelink: "https://xsgames.co/randomusers/assets/avatars/male/73.jpg",
    blogTitle: "Blog title 2",
    blogDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fugiat quia minus minima consequatur deleniti facilis id sequi, ullam quidem?",
  },
  {
    imagelink: "https://xsgames.co/randomusers/assets/avatars/male/73.jpg",
    blogTitle: "Blog title  3",
    blogDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fugiat quia minus minima consequatur deleniti facilis id sequi, ullam quidem?",
  },
];

connectDB();

// Listen to port
app.listen(PORT, () => console.log(`App is listening in port ${PORT}`));
