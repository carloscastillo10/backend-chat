require('dotenv').config();

const config = {
    dbUrl: process.env.DATABASE_URL,
    env: process.env.NODE_ENV || 'dev',
    filesRoute: process.env.FILES_ROUTE || 'files',
    host: process.env.HOST || 'http://localhost',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    staticRoute: process.env.STATIC_ROUTE || 'app/public'
};

module.exports = config;
