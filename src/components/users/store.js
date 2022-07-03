const Model = require("./model");

const getUser = (email) => {
  const user = Model.getOne({ email: { $eq: email } });
  return user;
};

const addUser = (data) => {
  const UserExist = getUser(data.email);
  if (UserExist) {
    return "Ya estas registrado/a!!";
  }
  const myUser = new Model(data);
  return myUser.save();
};

const deleteUser = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  // get: getUser,
  add: addUser,
  delete: deleteUser,
};
