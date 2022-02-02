import axios from "axios"
import { BASE_URL } from "libs/constants/BASE_URL"

export function requestGetItems(itemType: string) {
  return axios.request({
    method: "get",
    url: `${BASE_URL}/items?itemType=${itemType}`,
  })
}
