import { apiClient } from '../services/apiClient';

export function fetchUserData(userId: string) {
  return apiClient.get(`/users/${userId}`)
    .then(res => {
      console.log(res.data);
      return apiClient.get(`/profiles/${res.data.profileId}`);
    })
    .then(profileRes => {
      return {
        user: profileRes.data
      };
    })
    .catch(err => {
      console.error('Error fetching user data:', err);
      throw err;
    });
}