import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/owns';

export function ownPet(ownerId, petId) {
  const body = { ownerId, petId };
  return http.post(apiEndPoint, body);
}
