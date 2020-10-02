import { RaceModel } from '@/models/RaceModel';

import axios from 'axios';
export function useRaceService() {
  return {
    async list(): Promise<Array<RaceModel>> {
      const params = { status: 'PENDING' };
      const response = await axios.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races', { params });
      return Promise.resolve(response.data);
    }
  };
}
