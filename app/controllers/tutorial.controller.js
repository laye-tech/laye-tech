const db = require("../models");
const Tutorial = db.tutorials;
const Comment = db.comments;
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Tutorial
  const tutorial = {
    nom: req.body.nom,
    adress: req.body.adress,
    numtel:req.body.numtel
  
  };
    // Save Tutorial in the database
Tutorial.create(tutorial)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the Tutorial."
  });
});
};
// Create and Save new Tutorials
// exports.createTutorial = (tutorial) => {
//   return Tutorial.create({
//     title: tutorial.title,s
//     description: tutorial.description,
//   })
//     .then((tutorial) => {
//       console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
//       return tutorial;
//     })
//     .catch((err) => {
//       console.log(">> Error while creating tutorial: ", err);
//     });
// };

// Create and Save new Comments
// exports.createComment = (tutorialId, comment) => {
//   return Comment.create({
//     name: comment.name,
//     text: comment.text,
//     tutorialId: tutorialId,
//   })
//     .then((comment) => {
//       console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
//       return comment;
//     })
//     .catch((err) => {
//       console.log(">> Error while creating comment: ", err);
//     });
// };

// // Get the comments for a given tutorial
// exports.findTutorialById = (tutorialId) => {
//   return Tutorial.findByPk(tutorialId, { include: ["comments"] })
//     .then((tutorial) => {
//       return tutorial;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding tutorial: ", err);
//     });
// };

// // Get the comments for a given comment id
// exports.findCommentById = (id) => {
//   return Comment.findByPk(id, { include: ["tutorial"] })
//     .then((comment) => {
//       return comment;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding comment: ", err);
//     });
// };

// // Get all Tutorials include comments
exports.findAll = (req,res) => {
   Tutorial.findAll({
    include: ["comments"],
  }).then((data) => {
    res.send(data);
  });
};
