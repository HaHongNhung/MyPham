const Live_chatController = require('../../controllers/live_chatController');
const express = require('express');
const router = express.Router();

router.get('/', new Live_chatController().getAllLive_chatController);
router.get('/:id', new Live_chatController().getOneLive_chatController);
router.post('/', new Live_chatController().createLive_chatController);
router.put('/:id', new Live_chatController().updateLive_chatController);
router.delete('/:id', new Live_chatController().deleteLive_chatController);

module.exports = router;
