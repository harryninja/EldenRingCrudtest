module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('pessoa', {
    pes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pes_nome: {
      type: DataTypes.STRING(255)
    },
    pes_data_nascimento: {
      type: DataTypes.DATE
    },
    pes_cpf: {
      type: DataTypes.STRING(14)
    },
    pes_telefone: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    pes_observacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pes_prof_id: {
      type: DataTypes.INTEGER
    }
  });

  Pessoa.associate = function(models) {
    Pessoa.belongsTo(models.Profissao, { foreignKey: 'pes_prof_id' });
  };

  return Pessoa;
 };