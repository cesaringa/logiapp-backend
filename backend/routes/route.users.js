const { Router } = require ('express');
const router = Router();
const { 
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require("../controller/users.controller")

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)  // update the whole source of data
    .delete(deleteUser)
    // .patch() // Just update one data

module.exports = router;

// router
//     .get('/users', getUsers)