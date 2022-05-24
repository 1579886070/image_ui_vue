export default defineAppConfig({
  pages: [
    'pages/home/home',
    'pages/me/me',
    'pages/search/search',
    'pages/sms/sms',
    'pages/phone/phone',
    'pages/info/info',
    'pages/index/index',
  ],
  "tabBar": {
    borderStyle: "white",
    "color": "#707586",
    "selectedColor": "#1C1D20",
    "list": [{
      "pagePath": "pages/home/home",
      "text": "首页"
    }, {
      "pagePath": "pages/me/me",
      "text": "我的"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

})
