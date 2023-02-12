module.exports = app => {
    const gb_videoinfos = require("../controllers/gb_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", gb_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", gb_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", gb_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", gb_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", gb_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", gb_videoinfos.deleteAll);
  
    app.use("/api/gb_videoinfo", router);
  };