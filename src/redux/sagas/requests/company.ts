import axios from "axios"
import { BASE_URL } from "libs/constants/BASE_URL"

export function requestGetCompanies() {
  return axios.request({
    method: "get",
    url: `${BASE_URL}/companies`,
  })
}
