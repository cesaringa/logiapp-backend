const { Router } = require("express");
const router = Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product.controller");

router.route("/").get(getAllProducts).post(createProduct);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
