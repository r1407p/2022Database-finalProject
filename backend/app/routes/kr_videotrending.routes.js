module.exports = app => {
    const kr_videotrendings = require("../controllers/kr_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", kr_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", kr_videotrendings.findAll);
  
    //query
    router.get("/view_count", kr_videotrendings.findView);
    router.get("/likes", kr_videotrendings.findLike);
    router.get("/dislikes", kr_videotrendings.findDislike);
    router.get("/comment_count", kr_videotrendings.findComment);
  
    // Update a Tutorial with id
    router.put("/:id", kr_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", kr_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", kr_videotrendings.deleteAll);
  
    app.use("/api/kr_videotrending", router);
  };