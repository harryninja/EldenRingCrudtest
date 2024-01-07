module.exports = {
  HOST: "babar.db.elephantsql.com",
  USER: "wqyohywc",
  PASSWORD: "TydHrA5M3NSZHjDSJitXjzJZ4qA_zI2Y",
  DB: "wqyohywc",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

//sei que não é uma boa pratica e não seguro colocar dados do banco em config e sim em um .env porem para praticidade vou deixar aqui