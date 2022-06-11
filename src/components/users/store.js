const Model = require("./model");

const listUser = async (career) => {
  let filter = {};
  if (career) {
    filter = {
      career: career,
    };
  }
  const users = await Model.find(filter);
  return users;
};

const addUser = (data) => {
  const myUser = new Model(data);
  return myUser.save();
};

const deleteUser = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  list: listUser,
  add: addUser,
  delete: deleteUser,
};
