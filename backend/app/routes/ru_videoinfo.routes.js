module.exports = app => {
    const ru_videoinfos = require("../controllers/ru_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ru_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", ru_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ru_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ru_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ru_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", ru_videoinfos.deleteAll);
  
    app.use("/api/ru_videoinfo", router);
  };