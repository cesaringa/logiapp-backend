require("dotenv").config();
const { Pool } = require("pg");
const connectionString = process.env.DB_LOGIAPP_URL;

try {
  const pool = new Pool({ connectionString });
  pool.connect();
  module.exports = pool;
} catch (error) {
  console.log(error);
}

// try {
//     const dbUsers = {};
//     const pool = new Pool({ connectionString })
//     pool
//     .query ('SELECT * FROM users', (req,res,err) => {
//             if(err) { throw err }
//             console.log(res.rows)
//             console.log('DB USERS is connected')
//          })
// } catch (error) {
//     console.log(error);
// }

//     const dbUsers = {};
//     const pool = new Pool({ connectionString })
//     pool
//   .connect()
//   .then(client => {
//     return client
//       .query('SELECT * FROM users')
//       .then(res => {
//         client.release()
//         // console.log(res.rows)
//         // dbUsers.getUsers = res.rows;
//         // module.exports = dbUsers;
//       })
//       .catch(err => {
//         client.release()
//         console.log(err.stack)
//       })
//   })

// const port = process.env.PORT || 3000

// const getUsers = async () => {
//     const pool = new Pool({ connectionString });
//     await pool.connect();
//     const res= await pool.query('SELECT * FROM users') //Starting Async Query
//     // pool.query('SELECT * FROM users', (err, res) => { //Callback query
//     //   console.log(res.rows)
//     //   const usersRows = res.rows[0].lastname;
//     // })
//     const result = res.rows[0].first_name;
//     await pool.end() // Shut down client after clients returned
//     return
//     result;
//   };

//   getUsers().then((usersRows) => {
//     console.log(usersRows);
//   });
