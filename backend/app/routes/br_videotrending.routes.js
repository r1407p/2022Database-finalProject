module.exports = app => {
  const br_videotrendings = require("../controllers/br_videotrending.controller.js")

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", br_videotrendings.create);

  // Retrieve all Tutorials
  router.get("/", br_videotrendings.findAll);

  //query
  router.get("/view_count", br_videotrendings.findView);
  router.get("/likes", br_videotrendings.findLike);
  router.get("/dislikes", br_videotrendings.findDislike);
  router.get("/comment_count", br_videotrendings.findComment);

  // Update a Tutorial with id
  router.put("/:id", br_videotrendings.update);

  // Delete a Tutorial with id
  router.delete("/:id", br_videotrendings.delete);

  // Delete all Tutorials
  router.delete("/", br_videotrendings.deleteAll);

  app.use("/api/br_videotrending", router);
};