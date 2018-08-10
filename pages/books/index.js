// pages/books/index.js
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
        id: 'device',
        name: '设备&图书借用',
        open: false,
        pages: [
          {
            zh: '设备借用',
            url: 'device/device'
          }, {
            zh: '图书借阅',
            url: 'books/books'
          }
        ]
      },{
        id: 'storage',
        name: '逾期记录',
        url: 'overdue/overdue'
      }, {
        id: 'network',
        name: '设备&图书管理',
        open: false,
        pages: [
          {
            zh: '设备管理',
            url: 'device/manage'
          }, {
            zh: '图书管理',
            url: 'books/manage'
          }, {
            zh: '今日预订',
            url: 'books/today'
          }, {
            zh: '已借出',
            url: 'device/borrow'
          }
        ]
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
          wx.navigateTo({
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