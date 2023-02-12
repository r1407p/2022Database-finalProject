module.exports = app => {
    const mx_videoinfos = require("../controllers/mx_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", mx_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", mx_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", mx_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", mx_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", mx_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", mx_videoinfos.deleteAll);
  
    app.use("/api/mx_videoinfo", router);
  };