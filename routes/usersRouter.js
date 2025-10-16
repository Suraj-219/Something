const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth');

router.get('/', (req, res) => {
    res.send("hello");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get('/logout', logout);

module.exports = router;