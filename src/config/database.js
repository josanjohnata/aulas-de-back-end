module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sistema-de-agendamento',
  define: {
    timestamps: true,
    undercored: true,
    undercoredAll: true,
  }
};