import { UserModel } from '@/models/UserModel';
import Axios from 'axios';

export function useUserService() {
  return {
    async register(user: UserModel): Promise<UserModel> {
      const response = await Axios.post<UserModel>('https://ponyracer.ninja-squad.com/api/users', user);
      return response.data;
    }
  };
}
