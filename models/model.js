// const orm = require("./config/orm.js");

// const something = {
//   // some orms stuff!
// };

// module.exports = something;

module.exports = (sequelize, DataTypes) => {
  const mixtape_db = sequelize.define("mixtape_db", {
  text: {
      type: DataTypes.STRING,
      allowNull: false
}
});
return mixtape_db;
};