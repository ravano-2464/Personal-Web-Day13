'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyProject.init({
    projectName: DataTypes.STRING,
    description: DataTypes.STRING,
    technologies: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'my-project',
  });
  return MyProject;
};