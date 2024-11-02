const Live_chat_detailController = require('../../controllers/live_chat_detailController');
const express = require('express');
const router = express.Router();

router.get('/', new Live_chat_detailController().getAllLive_chat_detail);
router.get('/:id', new Live_chat_detailController().getOneLive_chat_detail);
router.post('/', new Live_chat_detailController().createLive_chat_detail);
router.put('/:id', new Live_chat_detailController().updateLive_chat_detail);
router.delete('/:id', new Live_chat_detailController().deleteLive_chat_detail);

module.exports = router;
