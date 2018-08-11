const sequelize = require('sequelize/index');

module.exports = async function (req, res, next) {
    try {
        sequelize.query(
            // "CREATE TABLE users (user_id serial PRIMARY KEY, name text, password text);
            // CREATE TABLE boards (board_id serial PRIMARY KEY, name_board text, user_id int, FOREIGN KEY (user_id) REFERENCES users(user_id));
            // CREATE TABLE columns (column_id serial PRIMARY KEY, name_column text, pos int, board_id int, FOREIGN KEY (board_id) REFERENCES boards(board_id));
            // CREATE TABLE cards (card_id serial PRIMARY KEY, title text, pos_card int, content_card text, column_id int, FOREIGN KEY (column_id) REFERENCES columns(column_id));");
        next();
    } catch(error){
        next(error);
    }
};
