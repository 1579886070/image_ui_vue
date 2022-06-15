const getBaseUrl = (url) => {
  let BASE_URL = 'https://image.api-p1.xiaoxinyes.club';
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    if (url.includes('/api/')) {
      BASE_URL = 'https://image.api-p1.xiaoxinyes.club'
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = 'https://image.api-p1.xiaoxinyes.club'
    }
  } else {
    // 生产环境
    if (url.includes('/api/')) {
      BASE_URL = 'https://image.api-p1.xiaoxinyes.club'
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = 'https://image.api-p1.xiaoxinyes.club'
    }
  }
  return BASE_URL
}

export default getBaseUrl;
