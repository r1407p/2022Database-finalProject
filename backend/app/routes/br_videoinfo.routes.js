module.exports = app => {
  const br_videoinfo = require("../controllers/br_videoinfo.controller.js")

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", br_videoinfo.create);

  // Retrieve all Tutorials
  router.get("/", br_videoinfo.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", br_videoinfo.findOne);

  // Update a Tutorial with id
  router.put("/:id", br_videoinfo.update);

  // Delete a Tutorial with id
  router.delete("/:id", br_videoinfo.delete);

  // Delete all Tutorials
  router.delete("/", br_videoinfo.deleteAll);

  app.use("/api/br_videoinfo", router);
};