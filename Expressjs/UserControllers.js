const Userdata = (req, res) => {
  const UserName = req.body.name;
  const UserEmail = req.body.email;
  const UserPassword = req.body.password;

  res.json({
    success: true,
    name: UserName,
    email: UserEmail,
    password: UserPassword,
  });
};

module.exports = Userdata;
