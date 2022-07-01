require("../database/client");
const pool = require("../database/client");

const getAllProducts = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM product");
    res.status(200).json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    const response = await pool.query(
      "SELECT * FROM product WHERE product_id = $1",
      [product]
    );
    res.status(200).json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { product_name, quantity } = req.body;
    const newProduct = await pool.query(
      "INSERT into product (Product_name, Quantity) VALUES ($1, $2)",
      [product_name, quantity]
    );
    console.log(newProduct);
    res.send("Product created");
  } catch (err) {
    console.error(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    const response = await pool.query(
      "DELETE FROM product WHERE product_id = $1",
      [product_id]
    );
    console.log(response);
    res.json(`Product ${product_id} deleted`);
  } catch (err) {
    console.error(err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    const { product_name, quantity } = req.body;
    const response = await pool.query(
      "UPDATE product SET product_name=$1, quantity=$2 WHERE product_id=$3",
      [product_name, quantity, product_id]
    );
    console.log(response);
    res.json("Product updated ggg");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
