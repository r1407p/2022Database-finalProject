module.exports = app => {
    const ca_videotrendings = require("../controllers/ca_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ca_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", ca_videotrendings.findAll);
  
  //query
  router.get("/view_count", ca_videotrendings.findView);
  router.get("/likes", ca_videotrendings.findLike);
  router.get("/dislikes", ca_videotrendings.findDislike);
  router.get("/comment_count", ca_videotrendings.findComment);
  
    // Delete a Tutorial with id
    router.delete("/:id", ca_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", ca_videotrendings.deleteAll);
  
    app.use("/api/ca_videotrending", router);
  };