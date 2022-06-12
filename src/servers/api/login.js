/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "../http"

export const login = (data) => {
  return HTTPREQUEST.post('/user/user/login', data)
}