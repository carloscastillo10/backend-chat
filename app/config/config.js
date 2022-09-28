require('dotenv').config();

const config = {
    dbUrl: process.env.DATABASE_URL,
    filesRoute: process.env.FILES_ROUTE || 'files',
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    staticRoute: process.env.STATIC_ROUTE || 'public'
};

module.exports = config;
