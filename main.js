const app = require('./app');
const config = require('./server/config/index');
const auth = require('./server/routes/auth');
const authUser = require('./server/passportJs/index').authUser;
const boards = require('./server/routes/boards');
const columns = require('./server/routes/columns');

app.use(authUser);
app.use('/auth', auth);
app.use('/boards', boards);
app.use('/columns', columns);

app.use(function(err, req, res, next) {
    console.error('Error handling middleWar', err.message);
    res.json(err.message);
});

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!');
});
