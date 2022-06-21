/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "../http"

export const getList = (data) => {
  return HTTPREQUEST.get('/user/article/index', data)
}

export const getInfo = (data) => {
    return HTTPREQUEST.get("/user/article/info", data)
}

export const getAdvertisement = (data) => {
  return HTTPREQUEST.get("/user/advertisement/new/info", data)
}

export const upload = (data) => {
  return HTTPREQUEST.upload(data)
}

export const add = (data) => {
  return HTTPREQUEST.post('/user/article/add', data)
}

export const statusInfo = (data) => {
  return HTTPREQUEST.get('/user/article/status' + data)
}