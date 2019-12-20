module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      period: DataTypes.STRING,
    },
  );


  return Schedule;
};
