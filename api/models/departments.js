const departments = (sequelize, DataTypes) => {
  return sequelize.define("departments", {
    id_user: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    }
  })
}

module.exports = departments
