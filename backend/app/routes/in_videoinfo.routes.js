module.exports = app => {
    const in_videoinfos = require("../controllers/in_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", in_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", in_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", in_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", in_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", in_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", in_videoinfos.deleteAll);
  
    app.use("/api/in_videoinfo", router);
  };