module.exports = (sequelize, DataTypes) => {
    const Profissao = sequelize.define('profissao', {
     prof_id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     prof_nome: {
       type: DataTypes.STRING(255)
     }
    });

    Profissao.associate = function(models) {
     Profissao.hasMany(models.Pessoa, { foreignKey: 'pes_prof_id' });
    };

    return Profissao;
   };