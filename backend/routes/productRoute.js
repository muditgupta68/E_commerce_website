const express = require("express");
const { getAllProducts, createProducts, updateProducts, deleteProduct, getProduct } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/new").post(createProducts);
router.route("/update/:id").put(updateProducts);
router.route("/delete/:id").delete(deleteProduct);
router.route("/getProduct/:id").get(getProduct);

module.exports = router;
