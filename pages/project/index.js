// pages/project/index.js
const openIdUrl = require('../../config').openIdUrl
const duration = 2000
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openid:null,
    list: [
      {
        id: 'view',
        name: '测试迭代',
        open: false,
        pages: [
          {
            zh: '进行中',
            url: 'index/doing'
          }, {
            zh: '已完成',
            url: 'index/history'
          }, {
            zh: '未开始',
            url: 'index/assigne'
          }, {
            zh: '项目风险',
            url: 'index/risk'
          }, {
            zh: '功能地图',
            url: 'index/func'
          }
        ]
      },{
        id: 'api',
        name: '接口测试',
        open: false,
        pages: [
          {
            zh: '进行中',
            url: 'doing/doing'
          }, {
            zh: '历史',
            url: 'history/history'
          }
        ]
      }, {
        id: 'nav',
        name: '待处理BUG',
        open: false,
        pages: [
          {
            zh: '未确认BUG',
            url: 'bug/unconfirmed'
          }, {
            zh: 'A类BUG',
            url: 'bug/fault'
          }, {
            zh: '未回归BUG',
            url: 'bug/noregress'
          }, {
            zh: '被激活BUG',
            url: 'bug/activated'
          }
        ]
      }, {
        id: 'content',
        name: '测试规范',
        open: false,
        pages: [
          {
            zh: '测试迭代评估',
            url: 'standard/index'
          }, {
            zh: '测试迭代管理',
            url: 'standard/manage'
          }, {
            zh: '测试BUG管理',
            url: 'standard/bug'
          }, {
            zh: '测试准入制度',
            url: 'standard/admittance'
          }, {
            zh: '考核积分计划',
            url: 'standard/score'
          }, {
            zh: '预警邮件模板',
            url: 'standard/warning'
          }, {
            zh: '测试通过邮件',
            url: 'standard/pass'
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
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/pages/books/index?id=123'
    }
  }
})