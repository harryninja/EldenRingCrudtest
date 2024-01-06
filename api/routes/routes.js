module.exports = app => {
  const persons = require("../controllers/person.controller.js");


  const router = require("express").Router();

  router.post("/", persons.create);
  router.get("/", persons.findAll);
  router.get("/allProf", persons.findAllProf);
  router.get("/:id", persons.findOne);
  router.put("/:id", persons.update);
  router.delete("/:id", persons.delete);

  app.use("/api/persons", router);
};
