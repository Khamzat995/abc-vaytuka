const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.post("/admin/product", productsController.createProduct);
router.get("/products", productsController.getAllProducts);
router.get("/products/category/:id", productsController.getProductByCategoryId);
router.get("/products/company/:id", productsController.getProductsByCompanyId);
router.get("/product/:id", productsController.getProductById); /// products/product !!!!
router.patch("/admin/product/:id", productsController.editProduct);
router.delete("/admin/product/:id", productsController.removeProduct);

module.exports = router;
