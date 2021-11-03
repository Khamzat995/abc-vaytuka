const { Router } = require("express");
const router = Router();

router.use(require("./products.route"));
router.use(require("./single-products.route"));

module.exports = router;
