import product from "../models/product.model.js";

const getProduct = async(req, res)=> {
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getSingleProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createProduct = async(req, res) => {
    try {
        const products = await product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findByIdAndUpdate(id, req.body);
        if(!products)
            return res.status(404).json({message: "Product not found"});
        const updatedProd = await product.findById(id);
        res.status(200).json(updatedProd);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const products = await product.findByIdAndDelete(id);
        if(!products)
            res.status(404).json("Product not found");
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export {
        getProduct, 
        getSingleProduct, 
        createProduct,
        updateProduct,
        deleteProduct
    };