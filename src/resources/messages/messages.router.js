const express = require('express');
const controller = require('../../controllers/message');

const router = express.Router();


//the callback function under can be replaced by controller
router.get('/messages', controller.getMessages);

router.post('/messages', controller.postMessage);

router.delete('/messages/:id', controller.deleteMessage);

router.put('/messages/:id', controller.updateMessage);

module.exports = router; 