module.exports = app => {
    const kr_videoinfos = require("../controllers/kr_videoinfo.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", kr_videoinfos.create);
  
    // Retrieve all Tutorials
    router.get("/", kr_videoinfos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", kr_videoinfos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", kr_videoinfos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", kr_videoinfos.delete);
  
    // Delete all Tutorials
    router.delete("/", kr_videoinfos.deleteAll);
  
    app.use("/api/kr_videoinfo", router);
  };