import express from "express";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js';
import booksInfo from '../backend/routes/booksInfo.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json()); // middleware to convert to data into json so its easier to deal with

// CORS
app.use(cors());

app.get("/", (req, res)=>{
    res.status(200).send("hi");
});

// Route for saving a new book
app.use('/books', booksRoute);

// Route for getting book info
app.use('/info', booksInfo);


// app.listen(process.env.PORT, ()=>{ 
//         console.log(`Listening at port ${process.env.PORT}`)
//     }
// )


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });