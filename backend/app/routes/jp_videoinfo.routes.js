module.exports = app => {
    const jp_videoinfos = require("../controllers/jp_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", jp_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", jp_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", jp_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", jp_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", jp_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", jp_videoinfos.deleteAll);
  
    app.use("/api/jp_videoinfo", router);
  };