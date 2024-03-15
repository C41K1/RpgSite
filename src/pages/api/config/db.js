const Sequelize = require ('sequelize');
const sequelize = new Sequelize(`postgres://postgres.oucrvrxeakehhikxkjkr:eRVmzdoQ6he9brKn@aws-0-sa-east-1.pooler.supabase.com:5432/postgres`, { dialectModule: require('pg') });

module.exports = sequelize;