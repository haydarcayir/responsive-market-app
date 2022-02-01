import axios from "axios"
import { BASE_URL } from "libs/constants/BASE_URL"

/* page: number */
export function requestGetItems() {
  return axios.request({
    method: "get",
    url: `${BASE_URL}/items`,
  })
}

/* items?_page=${page}&_limit=16 */
