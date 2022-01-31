import axios from "axios"
import { BASE_URL } from "libs/constants/BASE_URL"

export function requestGetItems(page: number) {
  console.log("page: ", page)
  return axios.request({
    method: "get",
    url: `${BASE_URL}/items?_page=${page}&_limit=16`,
  })
}
