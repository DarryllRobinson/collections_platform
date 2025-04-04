import config from "../../_config/config";
import { fetchWrapper } from "../../utils/fetch-wrapper";
const baseUrl = `${config.apiUrl}/cases`;

export const caseService = {
  getAll,
  getAllByAccountNumber,
  getById,
  create,
  update,
  //   delete: _delete,
};

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getAllByAccountNumber({ id }) {
  // console.log("getAllByAccountNumber", { id });
  return fetchWrapper.get(`${baseUrl}/account/${id}`);
}

function getById({ id }) {
  // console.log("getById", id);
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update({ id, ...params }) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
}
