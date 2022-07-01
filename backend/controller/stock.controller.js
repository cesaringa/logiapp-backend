require("../database/client");
const pool = require("../database/client");

const getAllUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    res.status(200).json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const response = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [user_id]
    );
    res.status(200).json(response.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { first_name, lastname, email } = req.body;
    // const newUser = await pool.query("INSERT into users (first_name, lastname, Email) VALUES ('Joe', 'Miller', 'joe.miller@logiapp.com')");
    const newUser = await pool.query(
      "INSERT into users (first_name, lastname, Email) VALUES ($1, $2, $3)",
      [first_name, lastname, email]
    );
    console.log(newUser);
    res.send("User created");
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const response = await pool.query("DELETE FROM users WHERE user_id = $1", [
      user_id,
    ]);
    console.log(response);
    res.json(`User ${user_id} deleted`);
  } catch (err) {
    console.error(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const { first_name, lastname, email } = req.body;
    const response = await pool.query(
      "UPDATE users SET first_name=$1, lastname=$2, Email=$3 WHERE user_id=$4",
      [first_name, lastname, email, user_id]
    );
    console.log(response);
    res.json("User updated ggg");
  } catch (err) {
    console.error(err.message);
  }
};
