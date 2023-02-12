module.exports = app => {
    const de_videoinfos = require("../controllers/de_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", de_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", de_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", de_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", de_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", de_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", de_videoinfos.deleteAll);
  
    app.use("/api/de_videoinfo", router);
  };