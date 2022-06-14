const getBaseUrl = (url) => {
  let BASE_URL = 'http://127.0.0.1:8808';
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    if (url.includes('/api/')) {
      BASE_URL = 'http://127.0.0.1:8808'
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = 'http://127.0.0.1:8808'
    }
  } else {
    // 生产环境
    if (url.includes('/api/')) {
      BASE_URL = 'http://127.0.0.1:8808'
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = 'http://127.0.0.1:8808'
    }
  }
  return BASE_URL
}

export default getBaseUrl;
