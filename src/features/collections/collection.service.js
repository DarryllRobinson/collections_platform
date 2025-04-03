import config from "../../_config/config";
import { fetchWrapper } from "../../utils/fetch-wrapper";
const baseUrl = `${config.apiUrl}/collections`;

export const collectionService = {
  getAll,
  //   getById,
  //   create,
  //   update,
  //   delete: _delete,
};

function getAll() {
  return fetchWrapper.get(baseUrl);
}
