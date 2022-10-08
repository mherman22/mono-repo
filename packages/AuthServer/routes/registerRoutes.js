const express = require('express');
const { newUser } = require('../controllers/userRegistrationController');
const router = express.Router();

router.post("/", newUser);

module.exports = router;