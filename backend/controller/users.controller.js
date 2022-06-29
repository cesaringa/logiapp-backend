require('../database/client');
const pool = require("../database/client");

const getAllUsers = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM users");
        res.status(200).json(response.rows);
    } catch (err) {
        console.error(err.message)
    }  
}

const getSingleUser = async (req, res) => {
    try{
        const user_id = req.params.id;
        const response = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id])
        res.status(200).json(response.rows);
    } catch (err) {
        console.error(err.message)
    }   
}

const createUser = async (req, res) => {
    try {
        const { first_name, lastname, email } = req.body;
        // const newUser = await pool.query("INSERT into users (first_name, lastname, Email) VALUES ('Joe', 'Miller', 'joe.miller@logiapp.com')");
        const newUser = await pool.query("INSERT into users (first_name, lastname, Email) VALUES ($1, $2, $3)",[
            first_name,
            lastname,
            email]);
        console.log(newUser);
        res.send('User created')
    } catch (err) {
        console.error(err.message)
    } 
}

const deleteUser = async (req, res) => {
    try{
        const user_id = req.params.id;
        const response = await pool.query('DELETE FROM users WHERE user_id = $1', [user_id]);
        console.log(response);
        res.json(`User ${user_id} deleted`);
    } catch (err) {
        console.error(err.message)
    }
}

const updateUser = async (req, res) => {
    try{
        const user_id = req.params.id;
        const { first_name, lastname, email } = req.body;
        const response = await pool.query("UPDATE users SET first_name=$1, lastname=$2, Email=$3 WHERE user_id=$4",[
            first_name,
            lastname,
            email,
            user_id
        ]);
        console.log(response);
        res.json ('User updated ggg');
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
}

// const getUsers = (req, res) => {
//     res.send('Users gg fs')
// }

// require('../database/client');
// const pool = require("../database/client")
// const express = require('express')
// const app = express();
// const cors = require('cors')

// // app.use(express.json()) // To request body in format JSON
// app.use(cors());
// app.get("/todos",async (req,res)=>{
//     try{
//       const allTodos = await pool.query("SELECT * FROM users");
//       res.send(allTodos.rows);
//       console.log(allTodos.rows)
//     } catch (err) {
//       console.error(err.message);
//     }
//   });




// app.get((req, res) => {
//     pool
//     .query('SELECT * FROM users')
//     .then((results) => {
//         res.send(results.rows);
//         console.log(results.rows);
//         var getUsers=results.rows;
//         module.exports = getUsers;
//         console.log(getUsers);
//     })
//     .catch((err) => console.log(err))
// })



// const getUsers = app.get(async (req,res) => {
//     try {
//        const allUsers = await pool.query('SELECT * FROM users');
//        res.json(allUsers.rows);
//        console.log(allUsers.rows)
//     } catch (err) {
//         console.error(err.message)
//     }
// });

// console.log(getUsers)
// module.exports = getUsers;

