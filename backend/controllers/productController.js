const { catchAsyncError } = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

//create products -- admin
exports.createProducts = catchAsyncError(async (req, res,next) => {
  const resData = await Product.create(req.body);
  res.status(201).json({ success: true, resData });
});

//delete products -- admin
exports.deleteProduct = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, msg: "invalid key id" });
  }
  const product = await Product.findById(id);
  if (!product) {
    return res.status(400).json({ success: false, msg: "no product found" });
  }
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);

  res
    .status(200)
    .json({ success: true, msg: "Data deleted", product: deleteProduct });
});

//update products --admin
exports.updateProducts = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, msg: "invalid key id" });
  }
  let product = await Product.findById({ _id: id });
  console.log(product);
  if (!product) {
    return res.status(400).json({ success: false, msg: "no product found" });
  }
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: true,
    }
  );

  res.status(200).json({ success: true, product: updateProduct });
});

//get selected Product --normal
exports.getProduct = catchAsyncError(async (req, res,next) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, msg: "no product found" });
  }
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  return res.status(200).json({ success: true, product });
});

//get all products -- normal
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const resData = await Product.find();
  res.status(200).json({ success: true, products: resData });
});
