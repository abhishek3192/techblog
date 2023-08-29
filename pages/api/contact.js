import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    //store in db
    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.4b2wbyu.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Databse Connection Failed" });
      return;
    }

    const db = client.db();
    try {
      const result = db.collection("contactForm").insertOne(newMessage);
      newMessage.id = (await result).insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message Failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Form Submitted Successfully", newMessage });
  }
};

export default handler;
