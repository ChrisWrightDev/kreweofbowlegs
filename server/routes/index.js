const express = require("express");
const router = express.Router();
const api = require('../controllers/api');
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname+"_"+Date.now());
    }
});

let upload = multer({
    storage: storage
}).single('image');

router.get('/api/pamphlets', api.getPamphlets);
router.get('/api/programs', api.getPrograms);
router.get('/api', api.fetchAllUsers);
router.get('/api/:id', api.fetchUserByID);
router.post('/api', upload, api.createUser);
router.patch('/api/:id', upload, api.UpdateUser);
router.delete('/api/:id', api.deleteUser);

module.exports = router;