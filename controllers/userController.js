const getUsers = (req, res) => {
  res.json({
    message: "Users fetched successfully",
    users: ["Jaan", "Alex", "Sam"]
  });
};

module.exports = { getUsers };