import { api } from './api';

const UserService = {
  getUserData: async id => {
    let user = {};
    try {
      const result = await api.get(`users/${id}`);

      if (result) {
        user = result.data;
      }
    } catch (err) {
      console.error(err);
    }

    return user;
  },
  updateUser: async (id, data) => {
    try {
      const result = await api.put(`users/${id}`, data);

      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default UserService;
