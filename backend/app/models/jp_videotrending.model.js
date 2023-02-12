module.exports = (sequelize, Sequelize) => {
    const Jp_videotrending = sequelize.define("jp_videotrending", {
      video_id: {
        type: Sequelize.STRING(100),
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(500)
      },
      publishedat: {
        type: Sequelize.STRING(100)
      },
      channelid: {
        type: Sequelize.STRING(500)
      },
      channeltitle: {
        type: Sequelize.STRING(500)
      },
      trending_date: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      view_count: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      dislikes: {
        type: Sequelize.INTEGER
      },
      comment_count: {
        type: Sequelize.INTEGER
      },
      thumbnail_link: {
        type: Sequelize.STRING(500)
      },
    }, 
    {
      timestamps: false,
    });
  
    return Jp_videotrending;
  };