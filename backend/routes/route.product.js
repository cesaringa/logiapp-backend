const { Router } = require ('express');
const router = Router();

router.route('/')
    .get((req,res) => {
        res.send('Product routes')
    })

module.exports = router;