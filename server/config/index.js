const config = {
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME || 'roman',
    dbUser: process.env.DB_User || 'roman',
    dbUserPass: process.env.DB_UserPass || '123',
    dbPort: process.env.DB_Port || 5432,
    dbHost: process.env.DB_Host || 'localhost',
    dbDialect: process.env.DB_Dialect || 'postgres',
    secretOrKey: process.env.Secret_Key || 'bla',
};
module.exports = config;
