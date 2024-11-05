const Live_chatController = require('../../controllers/live_chatController');
const express = require('express');
const router = express.Router();
    
router.get('/', new Live_chatController().getAllLive_chat);
router.get('/:id', new Live_chatController().getOneLive_chat);
router.post('/', new Live_chatController().createLive_chat);
router.put('/:id', new Live_chatController().updateLive_chat);
router.delete('/:id', new Live_chatController().deleteLive_chat);

module.exports = router;
