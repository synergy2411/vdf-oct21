const { Sequelize, DataTypes } = require("sequelize");

const PG_URL =
  "postgres://zsmuroqmrozpdb:4a0e94bd1273f16b885a276ec59310bbf97fefa76a24c6ac150e4d08a1c0978e@ec2-54-211-174-60.compute-1.amazonaws.com:5432/ddv0qgi3lpbg19";
const sequelize = new Sequelize("sqlite::memory:");
const TodoModel = require("./models/todo");

// const sequelize = new Sequelize(PG_URL, {
//     ssl : false
// });

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main()
