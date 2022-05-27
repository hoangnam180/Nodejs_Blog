const express = require('express');
const router = express.Router();
const newControllers = require('../app/controllers/NewConTrollers.js');

router.use('/test', newControllers.test);
router.use('/', newControllers.index);

module.exports = router;
