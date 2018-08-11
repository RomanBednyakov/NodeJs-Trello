const express = require('express');
const router = express.Router();
const AllBoardsAddBoards = require('../controller/board');

router.post('/', function (req, res, next) {
    AllBoardsAddBoards.saveBoard(req, res, next)
});
router.get('/', function (req, res, next) {
    AllBoardsAddBoards.allBoards(req, res, next);
});
router.delete('/', function (req, res, next) {
    AllBoardsAddBoards.deleteBoards(req, res, next);
});


module.exports = router;
