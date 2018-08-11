const sequelize = require('../sequelize/index');

async function saveColumn(req, res, next) {
    try {
        await sequelize.query(`INSERT INTO columns (name_column, pos, board_id) VALUES ('${req.body.title}', '${req.body.pos}', '${req.body.idBoard}')`, {type: sequelize.QueryTypes.INSERT});
        req.query.idBoard = req.body.idBoard;
        allColumns(req, res, next)
    } catch(error) {
        next(error);
    }
}
async function allColumns(req, res, next) {
    try {
        const board_id = req.query.idBoard;
        console.log('board_id',board_id);
        const columns = await sequelize.query(`SELECT * FROM columns WHERE board_id = '${board_id}'`, {type: sequelize.QueryTypes.SELECT});
        const cards = await sequelize.query(`SELECT cards.card_id, cards.title, cards.pos_card, cards.content_card, cards.column_id FROM columns INNER JOIN cards ON columns.board_id='${board_id}' AND columns.column_id=cards.column_id`, {type: sequelize.QueryTypes.SELECT});
        if (columns.length === 0) {
            res.json({board_id, columns})
        } else {
            columns.map((itemColumn) => {
                const allCards = [];
                cards.map((itemCard) => {
                    if (itemColumn.column_id === itemCard.column_id) {
                        allCards.push(itemCard)
                    }
                });
                itemColumn.cards = allCards;
            });
            res.json({board_id, columns})
        }
    } catch(error) {
        next(error);
    }
}
async function deleteColumns(req, res, next) {
    try {
        await sequelize.query(`DELETE FROM cards WHERE column_id = '${req.body.coulmnId}'; DELETE FROM columns WHERE column_id = '${req.body.coulmnId}'`, {type: sequelize.QueryTypes.DELETE});
        req.query.idBoard = req.body.idBoard;
        allColumns(req, res, next)
    } catch(error) {
        next(error);
    }
}
async function changePosColumn(req, res, next) {
    try {
        await sequelize.query(`UPDATE columns SET pos=${req.body.pos} WHERE column_id='${req.body.columnsId}'`, {type: sequelize.QueryTypes.UPDATE});
        res.json({message: 'successfully'})
    } catch(error) {
        next(error);
    }
}
async function saveCard(req, res, next) {
    try {
        await sequelize.query(`INSERT INTO cards (title, pos_card, content_card, column_id) VALUES ('${req.body.title}', '${req.body.pos}', '${req.body.content}', '${req.body.idColumn}')`, {type: sequelize.QueryTypes.INSERT});
        req.query.idBoard = req.body.idBoard;
        allColumns(req, res, next)
    } catch(error) {
        next(error);
    }
}
async function deleteCard(req, res, next) {
    try {
        await sequelize.query(`DELETE FROM cards WHERE card_id = '${req.body.cardId}';`, {type: sequelize.QueryTypes.DELETE});
        req.query.idBoard = req.body.idBoard;
        allColumns(req, res, next)
    } catch(error) {
        next(error);
    }
}
async function changePosCard(req, res, next) {
    try {
        await sequelize.query(`UPDATE cards SET pos_card=${req.body.pos}, column_id=${req.body.columnId} WHERE card_id='${req.body.cardId}'`, {type: sequelize.QueryTypes.UPDATE});
        res.json({message: 'successfully'})
    } catch(error) {
        next(error);
    }
}

const Column = {
    saveColumn,
    allColumns,
    deleteColumns,
    changePosColumn,
    saveCard,
    deleteCard,
    changePosCard
};
module.exports = Column;
