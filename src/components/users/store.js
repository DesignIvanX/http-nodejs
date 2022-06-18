const Model = require("./model");

const addUser = (data) => {
  const myUser = new Model(data);
  return myUser.save();
};

const deleteUser = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  add: addUser,
  delete: deleteUser,
};
