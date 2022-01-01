// module.exports = (sequelize, DataTypes) => {
//   const Tutorial = sequelize.define("tutorial", {
//     title: {
//       type: DataTypes.STRING
//     },
//     description: {
//       type: DataTypes.STRING
//     }
//   });

//   return Tutorial;
// };
module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("tutorial", {
    nom: {
      type: DataTypes.STRING
    },
    adress: {
      type: DataTypes.STRING
    },
    numtel: {
      type: DataTypes.INTEGER
    }
  });

  return Tutorial;
};
