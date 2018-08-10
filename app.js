//app.js
const openIdUrl = require('./config').openIdUrl
App({
  onLaunch: function () {
    console.log('App Launch')
    var self = this
    wx.login({
      success: function (res) {
        self.globalData.hasLogin = true
        //获取openid
        wx.request({
          url: openIdUrl + '/openid',
          data: {
            code: res.code
          },
          success: function (res) {
            self.globalData.openid = res.data.data.openid
          },
          fail: function (res) {
            wx.showToast({
              title: '拉取用户openid失败',
              icon: 'none',
              duration: duration
            })
          }
        })
      }
    })
    
  },
  onShow: function () {
    console.log('App Show')
    

  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    openid: null,
    userInfo: null
  },
  getUserInfo:function(){
    
  }
})