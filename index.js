import express from "express";
import mongoose from "mongoose";
import product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";

const app = express(),
      connectionURL = "mongodb+srv://sdibyan:0csbR9rCjxMNyMLF@backenddb.1uuxq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

//middleware
app.use(express.json());

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API along with nodemon");
});

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

//The async function here is a controller and the whole app.get section is a router.

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const products = await product.findById(id);
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try {
//         const products = await product.create(req.body);
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

//Update a product
// app.put('/api/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const products = await product.findByIdAndUpdate(id, req.body);
//         if(!products)
//             return res.status(404).json({message: "Product not found"});
//         const updatedProd = await product.findById(id);
//         res.status(200).json(updatedProd);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

//Delete a product
// app.delete('/api/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const products = await product.findByIdAndDelete(id);
//         if(!products)
//             res.status(404).json("Product not found");
//         res.status(200).json({message: "Product deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

async function databaseConnect() {

    try {
        await mongoose.connect(connectionURL);
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log("Failed to connect !", error);
    }

}

databaseConnect();