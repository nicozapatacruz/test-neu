const db = require("../database/models");

// let arraySubVectores = [
//   { id: 1, array: [1, 2, 3] },
//   { id: 2, array: [11, 12, 13] },
//   { id: 3, array: [21, 22, 23] },
// ];

module.exports = {
  getAll: async () => {
    //return arraySubVectores;
    return await db.SubVector.findAll();
  },
  getOne: async (id) => {
    //return arraySubVectores[id];
    const detail = await db.SubVector.findByPk(id);
    return detail;
  },
};
