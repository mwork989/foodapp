import express from 'express';
import mongoose from 'mongoose';
import restaurantRoutes from '../routes/restaurantRoutes.js';


const app = express();
const port =  4000;

// restaurantdb
mongoose.connect('mongodb://localhost/restaurantDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// enable json format for client to server communication 
app.use(express.json());


app.use('/api/restaurants', restaurantRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  