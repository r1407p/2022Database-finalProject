const db = require("../models");
const Jp_videoinfo = db.jp_videoinfo;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  //

  // Create a Tutorial
  const video = {
    video_id: req.body.video_id,
    publishedat: req.body.publishedat,
    categoryid: req.body.categoryid,
    tags: req.body.tags,
    thumbnail_link: req.body.thumbnail_link,
    comments_disabled: req.body.comments_disabled,
    ratings_disabled: req.body.ratings_disabled
  };

  // Save Tutorial in the database
  Jp_videoinfo.create(video)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Video."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const video_id = req.query.video_id;
  var condition = video_id ? { video_id: { [Op.iLike]: `%${video_id}%` } } : null;

  Jp_videoinfo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving videos."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Jp_videoinfo.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Video with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Video with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Jp_videoinfo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Video was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Video with id=${id}. Maybe Video was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Video with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Jp_videoinfo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Video was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Video with id=${id}. Maybe Video was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Video with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Jp_videoinfo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Videos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all videos."
      });
    });
};