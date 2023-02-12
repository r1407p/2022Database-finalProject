module.exports = app => {
    const fr_videoinfos = require("../controllers/fr_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fr_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", fr_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", fr_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", fr_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fr_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", fr_videoinfos.deleteAll);
  
    app.use("/api/fr_videoinfo", router);
  };