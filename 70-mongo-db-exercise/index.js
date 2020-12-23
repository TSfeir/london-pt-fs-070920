const mongodb = require("mongodb");
const { MongoClient, ObjectId } = mongodb;
const express = require("express");
const app = express();
const connectionUrl = `mongodb+srv://thomas:xxxxxxx@cluster0.lb3zw.mongodb.net/coworking?retryWrites=true&w=majority
`;
const port = 3100;

app.use(express.json());

let db;

MongoClient.connect(
  connectionUrl,
  { retryWrites: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to your DB");
    }
    db = client.db("coworking");
  }
);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/api/rooms", (req, res) => {
  if (req.query.equipment !== undefined) {
    const equipQueried = req.query.equipment;
    const collection = db.collection("rooms");
    collection.find({ equipment: equipQueried }).toArray((error, rooms) => {
      res.send(rooms);
    });
  } else {
    const collection = db.collection("rooms");
    collection.find({}).toArray((error, rooms) => {
      res.send(rooms);
    });
  }
});

app.post("/api/rooms", (req, res) => {
  const collection = db.collection("rooms");
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      res.send(`There was an error`, error);
    } else {
      res.send(req.body);
    }
  });
});

app.get("/api/rooms/available", (req, res) => {
  const collection = db.collection("rooms");
  collection.find({ isAvailable: true }).toArray((error, rooms) => {
    res.send(rooms);
  });
});

app.get("/api/room/:id", (req, res) => {
  const roomId = parseInt(req.params.id);
  const collection = db.collection("rooms");
  collection.find({ roomNumber: roomId }).toArray((error, room) => {
    res.send(room);
  });
});

app.put("/api/room/:id", (req, res) => {
  const roomAvailabilityUpdate = req.body.isAvailable;
  const roomId = parseInt(req.params.id);
  const collection = db.collection("rooms");
  const updatedRoom = collection.updateOne(
    { roomNumber: roomId },
    { $set: { isAvailable: roomAvailabilityUpdate } }
  );
  res.send(`Room ${roomId} availability is now ${roomAvailabilityUpdate}`);
});

app.put("/api/room/equipment/:id", (req, res) => {
  const equipmentUpdate = req.body.equipment;
  const roomId = parseInt(req.params.id);
  const collection = db.collection("rooms");
  const updatedRoom = collection.updateOne(
    { roomNumber: roomId },
    { $set: { equipment: equipmentUpdate } }
  );
  res.send(`Room ${roomId} updated with equipment: ${equipmentUpdate}`);
});

app.get("/api/companies", (req, res) => {
  const collection = db.collection("companies");
  collection.find({}).toArray((error, companies) => {
    res.send(companies);
  });
});

app.post("/api/companies", (req, res) => {
  const collection = db.collection("companies");
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      res.send(`There was an error`, error);
    } else {
      res.send(req.body);
    }
  });
});

app.get("/api/company/:id", (req, res) => {
  const companyId = ObjectId(req.params.id);
  const collection = db.collection("companies");
  collection.find({ _id: companyId }).toArray((error, company) => {
    res.send(company);
  });
});

app.put("/api/company/:id", (req, res) => {
  const companyId = ObjectId(req.params.id);
  const collection = db.collection("companies");
  collection.updateOne(
    { _id: companyId },
    { $set: { name: req.body.name, email: req.body.email } }
  );
  res.send(`Company details were updated.`);
});

app.get("/api/bookings", (req, res) => {
  if (req.query.companyId !== undefined) {
    const idCompany = req.query.companyId;
    const collection = db.collection("bookings");
    collection
      .find({ companyId: ObjectId(idCompany) })
      .toArray((error, bookings) => {
        res.send(bookings);
      });
  } else {
    const collection = db.collection("bookings");
    collection.find({}).toArray((error, bookings) => {
      res.send(bookings);
    });
  }
});

app.delete("/api/bookings", (req, res) => {
  const idCompany = ObjectId(req.query.companyId);
  console.log(idCompany);
  const collection = db.collection("bookings");
  collection.deleteMany({ companyId: idCompany });
  res.send(`All bookings for ${idCompany} are now deleted.`);
});

app.get("/api/booking/:id", (req, res) => {
  const bookingId = ObjectId(req.params.id);
  const collection = db.collection("bookings");
  collection.find({ _id: bookingId }).toArray((error, booking) => {
    res.send(booking);
  });
});

app.delete("/api/booking/:id", (req, res) => {
  const bookingId = ObjectId(req.params.id);
  const collection = db.collection("bookings");
  collection.deleteOne({ _id: bookingId });
  res.send(`Booking #${bookingId} is now deleted.`);
});
