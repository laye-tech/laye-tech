// const tutorials=require('../controllers.js/tutorial.controllers.js');
// const magasin=require('../controllers.js/tutorial.controller.js');
  const tutorial=require('../app/controllers/tutorial.controller');
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorial.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorial.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    // app.use('/api/tutorials', router);
module.exports=router