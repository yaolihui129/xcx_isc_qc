// pages/mine/index.js
const openIdUrl = require('../../config').openIdUrl
const duration = 2000
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'view',//用来查找图标
        name: '测试迭代',
        open: false,
        pages: [
          {
            zh: '我负责',
            url: 'doing/doing'
          }, {
            zh: '待分派',
            url: 'history/history'
          }
        ]
      }, {
        id: 'nav',
        name: '待处理BUG',
        open: false,
        pages: [
          {
            zh: '未确认',
            url: 'doing/doing'
          }, {
            zh: '未回归',
            url: 'history/history'
          }
        ]
      }, {
        id: 'api',
        name: '考核积分',
        url: 'doing/doing',
        
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: openIdUrl + '/getUserInfo',
      data: {
        openid: app.globalData.openid
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == 400) {
          wx.redirectTo({
            url: '../login/login'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})