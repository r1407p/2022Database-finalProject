module.exports = app => {
    const ru_videotrendings = require("../controllers/ru_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ru_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", ru_videotrendings.findAll);
  
    //query
    router.get("/view_count", ru_videotrendings.findView);
    router.get("/likes", ru_videotrendings.findLike);
    router.get("/dislikes", ru_videotrendings.findDislike);
    router.get("/comment_count", ru_videotrendings.findComment);
  
    // Update a Tutorial with id
    router.put("/:id", ru_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ru_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", ru_videotrendings.deleteAll);
  
    app.use("/api/ru_videotrending", router);
  };