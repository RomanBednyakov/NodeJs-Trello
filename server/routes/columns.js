const express = require('express');
const router = express.Router();
const column = require('../controller/column');

router.post('/', function (req, res, next) {
    column.saveColumn(req, res, next)
});
router.put('/', function (req, res, next) {
    column.changePosColumn(req, res, next)
});
router.get('/', function (req, res, next) {
    column.allColumns(req, res, next);
});
router.delete('/', function (req, res, next) {
    column.deleteColumns(req, res, next);
});
router.post('/card', function (req, res, next) {
    column.saveCard(req, res, next)
});
router.delete('/card', function (req, res, next) {
    column.deleteCard(req, res, next);
});
router.put('/card', function (req, res, next) {
    column.changePosCard(req, res, next)
})

module.exports = router;
