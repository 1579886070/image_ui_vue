/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const getResultData_servers = (postData) => {
  return HTTPREQUEST.get('/test', postData)
}


export const getResultData_servers2 = (postData) => {
  return HTTPREQUEST.post('/test2', postData)
}
