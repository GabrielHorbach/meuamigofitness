import api from './api';

const UserService = {
  getUserData: async (id, token) => {
    let user = {};
    try {
      const result = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result) {
        user = result.data;
      }
    } catch (err) {
      console.log(err);
    }

    return user;
  },
};

export default UserService;
