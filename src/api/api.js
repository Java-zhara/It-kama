import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9ada4f1b-d0e4-4d5c-b035-f68269745431",
  },
});

export const usersAPI = {
  getUsers (currentPage, pageSize) {
    return instance
    .get(
      `users?page=${currentPage}&count=${pageSize}`,
    )
    .then(response => {
      return response.data
    });
  },
  follow(id) {
    return instance
    .post(
      `follow/${id}`,
      {},
    )
  },
  unfollow(id) {
    return instance
    .delete(
      `follow/${id}`,
    )   
  },
  getProfile(userId) {
    return instance
    .get(
      `profile/` + userId,
    )   
  },
}

export const authAPI = {
  me() {
    return instance
    .get(`auth/me`
    )
  }
}
