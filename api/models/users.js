//

const users = (sequelize, DataTypes) => {
  return sequelize.define("users", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  })
}

module.exports = users
