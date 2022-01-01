module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    nom: {
      type: DataTypes.STRING
    },
    typevetement: {
      type: DataTypes.STRING
    },
    prixvetement: {
      type: DataTypes.STRING
    },
    descriptionvetement: {
      type: DataTypes.STRING
    }
  });

  return Comment;
};
