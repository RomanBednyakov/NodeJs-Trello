# NodeJS-Trello
<pre> nodejs version 8.11 </pre>
1) Node.js install
    <pre> sudo apt-get update <br> sudo apt-get install nodejs</pre>
    <pre>https://www.digitalocean.com/community/tutorials/node-js-ubuntu-16-04-ru</pre>
    ------------------
2) Npm install
    <pre>sudo apt-get install npm</pre>
    ------------------
3) PostgreSQL install
    <pre>https://www.digitalocean.com/community/tutorials/postgresql-ubuntu-16-04-ru</pre>

    <pre>https://www.postgresql.org/download/windows/</pre>
    ------------------
    <pre>
    dbName: 'roman',
    dbUser: 'roman',
    dbUserPass: '123',
    dbPort: 5432,
    dbHost: 'localhost'
    </pre>
    ------------------
    Added table on bd
    <pre>CREATE TABLE users (user_id serial PRIMARY KEY, name text, password text);</pre>
    <pre>CREATE TABLE boards (board_id serial PRIMARY KEY, name_board text, user_id int, FOREIGN KEY (user_id) REFERENCES users(user_id));</pre>
    <pre>CREATE TABLE columns (column_id serial PRIMARY KEY, name_column text, pos int, board_id int, FOREIGN KEY (board_id) REFERENCES boards(board_id));</pre>
    <pre>CREATE TABLE cards (card_id serial PRIMARY KEY, title text, pos_card int, content_card text, column_id int, FOREIGN KEY (column_id) REFERENCES columns(column_id));</pre>
    ------------------
4) Install project
   <pre>npm install</pre>
    ------------------
5) Start project
   <pre>npm start</pre>

