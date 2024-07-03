const users = [];

const db = {
  getAll: async () => users,
  getOne: async (id) => users.find((user) => user.id === id),
  add: async (user) => {
    users.push(user);
    return user;
  },
  update: async (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null;
  },
  remove: async (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  },
};

export default db;
