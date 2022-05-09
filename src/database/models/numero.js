module.exports = (Sequelize, dataTypes) => {
  const numero = Sequelize.define(
    "Numero",
    {
      numero: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "data_vector_csv",
      timestamps: false,
    }
  );

  return numero;
};
