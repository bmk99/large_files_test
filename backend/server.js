// const express = require('express')
// const app = express()

// const dotenv = require("dotenv")
// dotenv.config()

// const PORT = process.env.PORT


// app.listen(PORT,()=>{
//     console.log(`server running on http://localhost:${PORT}`)
// })
// 
const express = require('express');
const app = express();
const port = 3000;

// Create routers for different features or resources
const userRouter = express.Router();
const productRouter = express.Router();

// Define routes for the user router
userRouter.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

userRouter.get('/dashboard', (req, res) => {
  res.send('User Dashboard Page');
});

// Define routes for the product router
productRouter.get('/list', (req, res) => {
  res.send('Product List Page');
});

productRouter.get('/details', (req, res) => {
  res.send('Product Details Page');
});

// Use the routers for different paths
app.use('/user', userRouter);
app.use('/product', productRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
