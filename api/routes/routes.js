module.exports = app => {
  const persons = require("../controllers/person.controller.js");
  const jobs = require("../controllers/profissao.controller.js");


  const router = require("express").Router();

  router.post("/", persons.create);

  router.get("/", persons.findAll);

  router.get("/:id", persons.findOne);

  router.put("/:id", persons.update);

  router.delete("/:id", persons.delete);

  router.get("/", jobs.findAllProf);

  app.use("/api/jobs", router);

  app.use("/api/persons", router);
};
