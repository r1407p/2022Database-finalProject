module.exports = app => {
    const in_videotrendings = require("../controllers/in_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", in_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", in_videotrendings.findAll);
  
    //query
    router.get("/view_count", in_videotrendings.findView);
    router.get("/likes", in_videotrendings.findLike);
    router.get("/dislikes", in_videotrendings.findDislike);
    router.get("/comment_count", in_videotrendings.findComment);
  
    // Update a Tutorial with id
    router.put("/:id", in_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", in_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", in_videotrendings.deleteAll);
  
    app.use("/api/in_videotrending", router);
  };