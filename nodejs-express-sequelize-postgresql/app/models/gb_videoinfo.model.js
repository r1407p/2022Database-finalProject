module.exports = (sequelize, Sequelize) => {
    const Gb_videoinfo = sequelize.define("gb_videoinfo", {
      video_id: {
        type: Sequelize.STRING(100),
        primaryKey: true
      },
      publishedat: {
        type: Sequelize.STRING(100)
      },
      categoryid: {
        type: Sequelize.INTEGER
      },
      tags: {
        type: Sequelize.STRING(1000)
      },
      thumbnail_link: {
        type: Sequelize.STRING(500)
      },
      comments_disabled: {
        type: Sequelize.STRING(10)
      },
      ratings_disabled: {
        type: Sequelize.STRING(10)
      }
    }, 
    {
      timestamps: false,
    });
  
    return Gb_videoinfo;
  };