module.exports = app => {
    const fr_videotrendings = require("../controllers/fr_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fr_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", fr_videotrendings.findAll);
  
    //query
    router.get("/view_count", fr_videotrendings.findView);
    router.get("/likes", fr_videotrendings.findLike);
    router.get("/dislikes", fr_videotrendings.findDislike);
    router.get("/comment_count", fr_videotrendings.findComment);
  
    // Update a Tutorial with id
    router.put("/:id", fr_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fr_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", fr_videotrendings.deleteAll);
  
    app.use("/api/fr_videotrending", router);
  };