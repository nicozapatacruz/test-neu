module.exports = (Sequelize, dataTypes) => {
  const numero = Sequelize.define(
    "SubVector",
    {
      id: {
        type: dataTypes.BIGINT,
        primaryKey: true,
      },
      array: {
        type: dataTypes.STRING(100),
      },
    },
    {
      tableName: "sub_vectors",
      timestamps: false,
    }
  );

  return numero;
};
