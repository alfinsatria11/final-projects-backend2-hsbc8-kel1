const db = require("../models");

const getUsers = async (req, res) => {
  const user = await db.users.findAll();

  return res.status(200).json({
    message: "success",
    data: user,
  });
};

module.exports = {
  getUsers,
};
