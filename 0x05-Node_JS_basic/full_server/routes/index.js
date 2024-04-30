const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require("../controllers/StudentsController");

router.get('/', AppController.getHomePage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;