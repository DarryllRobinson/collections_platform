import config from "../../_config/config";
import { fetchWrapper } from "../../utils/fetch-wrapper";
const baseUrl = `${config.apiUrl}/accounts`;

export const accountService = {
  getAll,
  getAllByCustomerRefNo,
  getById,
  //   create,
  //   update,
  //   delete: _delete,
};

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getAllByCustomerRefNo({ customerRefNo }) {
  return fetchWrapper.get(`${baseUrl}/customer/${customerRefNo}`);
}

function getById({ id }) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}
