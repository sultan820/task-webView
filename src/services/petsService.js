import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/pets';

function petsUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getPets() {
  return http.get(apiEndPoint);
}

export function savePet(pet) {
  if (pet._id) {
    const body = { ...pet };
    delete body._id;
    return http.put(petsUrl(pet._id), body);
  }
  return http.post(apiEndPoint, pet);
}

export function getPet(petId) {
  return http.get(petsUrl(petId));
}

export function deletePet(petId) {
  return http.delete(petsUrl(petId));
}
