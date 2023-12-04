const db = require("../models");

const getUsers = async (req, res) => {
  const users = await db.users.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: db.roles,
      },
    ],
  });

  return res.status(200).json({
    message: "success",
    data: users,
  });
};

module.exports = {
  getUsers,
};
