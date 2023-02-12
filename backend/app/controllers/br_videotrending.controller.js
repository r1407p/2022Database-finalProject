const db = require("../models");
const Br_videotrending = db.br_videotrending;
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
    title: req.body.title,
    publishedat: req.body.publishedat,
    channelId: req.body.channelId,
    channelTitle: req.body.channelTitle,
    trending_data: req.body.trending_data,
    view_count: req.body.view_count,
    like: req.body.like,
    dislike: req.body.dislike,
    comment_count: req.body.comment_count,
    thumbnail_link: req.body.thumbnail_link
  };

  // Save Tutorial in the database
  Br_videotrending.create(video)
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
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Br_videotrending.findAll({ where: condition })
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

exports.findView = (req, res) => {
  Br_videotrending.findAll({ 
    order: [['view_count', 'DESC']],
    attributes:['video_id','title','publishedat','trending_date','channelid','channeltitle','thumbnail_link','view_count', 'likes', 'dislikes', 'comment_count'],
    limit : 10,
   })
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
// Find video with most likes
exports.findLike = (req, res) => {
  Br_videotrending.findAll({ 
    order: [['likes', 'DESC']],
    attributes:['video_id','title','publishedat','trending_date','channelid','channeltitle','thumbnail_link','view_count', 'likes', 'dislikes', 'comment_count'],
    limit : 10,
   })
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
// Find videos with most dislikes
exports.findDislike = (req, res) => {
  Br_videotrending.findAll({ 
    order: [['dislikes', 'DESC']],
    attributes:['video_id','title','publishedat','trending_date','channelid','channeltitle','thumbnail_link','view_count', 'likes', 'dislikes', 'comment_count'],
    limit : 10,
   })
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
// Find videos with most comments
exports.findComment = (req, res) => {
  Br_videotrending.findAll({ 
    order: [['comment_count', 'DESC']],
    attributes:['video_id','title','publishedat','trending_date','channelid','channeltitle','thumbnail_link','view_count', 'likes', 'dislikes', 'comment_count'],
    limit : 10,
   })
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

  Br_videotrending.findByPk(id)
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

  Br_videotrending.update(req.body, {
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

  Br_videotrending.destroy({
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
  Br_videotrending.destroy({
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