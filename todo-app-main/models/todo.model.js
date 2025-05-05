module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Todo;
};
