module.exports = app => {
    const ca_videoinfos = require("../controllers/ca_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ca_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", ca_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ca_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ca_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ca_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", ca_videoinfos.deleteAll);
  
    app.use("/api/ca_videoinfo", router);
  };