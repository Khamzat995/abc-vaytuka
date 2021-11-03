const { Router } = require("express");
const { singleProductSchema } = require("../controllers/single-products.controller");

const router = Router();

router.post("/admin/single-product", singleProductSchema.createSingleProduct);
router.get("/single-products", singleProductSchema.getAllSingleProduct);
router.get("/single-product/:id", singleProductSchema.getSingleProductById); /// products/product !!!!
router.patch("/admin/single-product/:id", singleProductSchema.editSingleProduct);
router.delete("/admin/single-product/:id", singleProductSchema.removeSingleProduct);

module.exports = router;