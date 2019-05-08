const departments = (sequelize, DataTypes) => {
  let departments = sequelize.define("departments", {
    id_user: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    }
  })

  departments.associate = models => {
    models.departments.belongsTo(models.users, {
      foreignKey: "id_user",
      targetKey: "id"
    })
  }

  return departments
}

module.exports = departments
