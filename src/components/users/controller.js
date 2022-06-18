const store = require("./store");

const addUser = (name, email, career) => {
  return new Promise((res, rej) => {
    if (!name || !email || !career) {
      console.error("[controllerUsers] Internal Error (addUser)");
      return rej("Internal Error");
    }
    const user = {
      name: name,
      email: email,
      career: career,
    };
    return res(store.add(user));
  });
};

const deleteUser = (id) => {
  return new Promise((res, rej) => {
    if (!id) {
      console.error("[controllerUsers] Internal Error (deleteUser)");
      return rej("Internal Error");
    }
    store
      .delete(id)
      .then((id) => {
        return res(id);
      })
      .catch((e) => {
        return rej(e);
      });
  });
};

module.exports = {
  add: addUser,
  delete: deleteUser,
};
