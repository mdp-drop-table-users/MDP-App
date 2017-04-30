
var statusMessages = {
  projects: {
    get: {
      error: 'fuq',
      success: 'holla at ya boi'
    },
    post: {
      error: 'fuq',
      success: 'holla at ya boi'
    }
  }
};

var setup = function(app) {

  //get projects
  app.get('/api/projects', (req, res, next) => {
    if(!true){
      res.status(400).json({status: statusMessages.projects.get.error });
    } else {
      res.status(200).json({status: statusMessages.projects.get.success, data: { yuh: 'yuhhhhh' }});
    }
  });

  //create project
  app.post('/api/createProject', (req, res, next) => {
    if(!true){
      res.status(400).json({status: statusMessages.projects.post.error });
    } else {
      res.status(200).json({status: statusMessages.projects.post.success, data: { yuh: 'yuhhhhh' }});
    }
  });

};

module.exports.setup = setup;

