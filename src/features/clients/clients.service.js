import config from "../../_config/config";
import { fetchWrapper } from "../../utils/fetch-wrapper";
const baseUrl = `${config.apiUrl}/clients`;

export const clientService = {
  getAll,
  //   getById,
  //   create,
  //   update,
  //   delete: _delete,
};

function getAll() {
  return fetchWrapper.get(baseUrl);
}
