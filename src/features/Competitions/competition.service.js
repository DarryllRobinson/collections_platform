import config from '../../_config/config';
import { fetchWrapper } from '../../_helpers';
const baseUrl = `${config.apiUrl}/competitions`;

export const competitionService = { getAll, getById };

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  console.log('fetching competition by id: ', id);
  return fetchWrapper.get(`${baseUrl}/${id}`);
}
