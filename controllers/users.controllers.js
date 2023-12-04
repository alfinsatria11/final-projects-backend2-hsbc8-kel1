const getUsers = (req, res) => {
  return res.status(200).json({
    message: "ini users",
  });
};

module.exports = {
  getUsers,
};
