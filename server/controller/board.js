const sequelize = require('../sequelize/index');

async function saveBoard(req, res, next) {
    try {
        await sequelize.query(`INSERT INTO boards (name_board, user_id) VALUES ('${req.body.title}', '${req.body.userId}')`, {type: sequelize.QueryTypes.INSERT});
        allBoards(req, res, next)
    } catch(error) {
        next(error);
    }
}

async function allBoards(req, res, next) {
    try {
        const boards = await sequelize.query(`SELECT * FROM boards WHERE user_id = '${req.body.userId}'`, {type: sequelize.QueryTypes.SELECT});
        res.json({message: "successfully!", boards})
    } catch(error) {
        next(error);
    }
}

async function deleteBoards(req, res, next) {
    try {
        await sequelize.query(`DELETE FROM cards WHERE column_id IN (SELECT column_id FROM columns WHERE board_id='${req.body.id}');DELETE FROM columns WHERE board_id='${req.body.id}';DELETE FROM boards WHERE board_id='${req.body.id}';`, {type: sequelize.QueryTypes.SELECT});
        allBoards(req, res, next)
    } catch(error) {
        next(error);
    }
}

const Board = {
    saveBoard,
    allBoards,
    deleteBoards,
};
module.exports = Board;
