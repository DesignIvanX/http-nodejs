const Model = require("./model");

const getUser = (email) => {
  const user = Model.find({ email: email });
  return user;
};

const addUser = (data) => {
  const myUser = new Model(data);
  return myUser.save();
};

const deleteUser = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  get: getUser,
  add: addUser,
  delete: deleteUser,
};
