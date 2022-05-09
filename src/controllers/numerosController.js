const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../database/models");
const numerosService = require("../services/numeros-service");

module.exports = {
  list: async (req, res) => {
    const numeros = await numerosService.getAll();
    console.log(numeros);
    res.render("numerosList", {
      numeros: numeros,
    });
  },

  detail: async (req, res) => {
    const numero = await numerosService.getOne(req.params.id);
    console.log(numero);
    res.render("numerosDetail", {
      numero: numero,
    });
  },
  search: async (req, res) => {
    let search = req.query.search;
    const SubVector = await numerosService.getAll();
    if (search > SubVector.length) {
      res.redirect("error");
    }
    res.redirect(`/details/${search}`);
  },
  create: async (req, res) => {
    const numeros = await numerosService.create();
    console.log(numeros);
    res.redirect("/");
  },
  error: async (req, res) => {
    res.render("error");
  },
};
