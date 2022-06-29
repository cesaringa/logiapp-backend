require("./routes/route.users");

const express = require('express')
const app = express();

// Setting Port
const port = process.env.PORT || 7000
    app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

//Middleware to execute before we call the routes
const cors = require('cors');   
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.get('/', (req, res) => res.send("LOGIAPP"));
app.use('/users', require('./routes/route.users'));
app.use('/product', require('./routes/route.product'));

// Routes Cors
// app.use(require('./routes/users'));
