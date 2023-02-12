module.exports = app => {
    const jp_videotrendings = require("../controllers/jp_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", jp_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", jp_videotrendings.findAll);
  
    //query
    router.get("/view_count", jp_videotrendings.findView);
    router.get("/likes", jp_videotrendings.findLike);
    router.get("/dislikes", jp_videotrendings.findDislike);
    router.get("/comment_count", jp_videotrendings.findComment);
  
    // Update a Tutorial with id
    router.put("/:id", jp_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", jp_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", jp_videotrendings.deleteAll);
  
    app.use("/api/jp_videotrending", router);
  };