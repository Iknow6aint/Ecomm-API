const router = require("express").Router();
const Product = require("../models/Product");
const {verifyToken,isAuth, isAdmin} =  require("./verifyToken");

//create
router.post("/",isAdmin,async(req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id",isAuth,async(req,res)=>{
    

    try {
        const updatedProduct = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id",isAuth,async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//get
router.get("find/:id",async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);  
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS
router.get("/",isAdmin,async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.new
    try {
      let products;
      if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(5)
      }else if(qCategory){
        products = await Product.find({
            categories:{
                $in:[qCategory]
            },
        })
      }else{
        products = await Product.find()
      }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
})
 
module.exports = router;