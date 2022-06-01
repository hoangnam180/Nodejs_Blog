const express = require('express');
const router = express.Router();
const newControllers = require('../app/controllers/NewConTrollers.js');

router.get('/test', newControllers.test);
router.get('/', newControllers.index);

module.exports = router;
