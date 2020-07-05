import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/owners';

function ownerUrl(id) {
  return `${apiEndPoint}/${id}`;
}
function ownerPetsUrl(id) {
  return `${apiEndPoint}/myPets/${id}`;
}

// export function createOwner(owner) {
//   return http.post(apiEndPoint, {
//     name: owner.name,
//     address: owner.address,
//     phone: owner.phone,
//     email: owner.email,
//   });
// }

export function saveOwner(owner) {
  if (owner._id) {
    const body = { ...owner };
    delete body._id;
    return http.put(ownerUrl(owner._id), body);
  }
  return http.post(apiEndPoint, owner);
}

export function getOwners() {
  return http.get(apiEndPoint);
}

export function getOwner(ownerId) {
  return http.get(ownerUrl(ownerId));
}

export function deleteOwner(ownerId) {
  return http.delete(ownerUrl(ownerId));
}

export function getMyPets(ownerId) {
  return http.get(ownerPetsUrl(ownerId));
}
