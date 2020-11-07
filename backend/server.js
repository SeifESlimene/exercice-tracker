// IMPORT OUR EXPRESS LIBRARY
const express = require("express");
// IMPORT OUR CORS LIBRARY
const cors = require("cors");
// IMPORT OUR MONGOOSE LIBRARY THAT HELPS US TO CONNECT TO OUR MONGO DB
// I HAVE CIRCULAR DEPENDENCY I DON'T KNOW WHY!
const mongoose = require("mongoose");
// IMPORT OUR DOTENV LIBRARY AND THEN EXECUTE IT
const dotenv = require("dotenv").config();

// CREATE OUR EXPRESS APP
const app = express();
// CONFIGURING OUR APP PORT
const port = process.env.PORT || 5000;

// USING CORS MIDDLEWARE FOR ALL ROUTES
app.use(cors());
// USING MIDDLEWARE FOR ALL ROUTES TO PARSE ALL JSONS REQ AND RES
app.use(express.json());

// CONNECTING TO MONGODB ATLAS
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// CHECK IF CONNECTION TO MONGODB ATLAS IS OK?
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB Database Connection Established Successfully!");
});

// IMPORT OUR ROUTE FILES
const exercisesRouter = require("./routes/exercises.js");
const userRouter = require("./routes/users.js");
// CREATE OUR ROUTERS MIDDLEWARES WHENEVER WE MATCH THE ROUTES
app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

// START THE SERVER BY LISTENING TO OUR PORT
app.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`);
});
