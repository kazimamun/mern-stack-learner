const router = require('express').Router();

//registration route
router.post('/register', (req,res)=>{
    res.send('registration routes')
})

//login route
router.post('/login',(req,res)=>{
    
})

module.exports = router;