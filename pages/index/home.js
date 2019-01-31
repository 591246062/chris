// pages/index/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 6000,
    duration: 4000,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    player()
    function player() {
      backgroundAudioManager.title = "红尘来去一场空"
      backgroundAudioManager.pname = "红尘来去一场空"
      backgroundAudioManager.singer = "刘亚伟"
      backgroundAudioManager.coverImgUrl = "https://imgessl.kugou.com/stdmusic/20170517/20170517145109271497.jpg"
      backgroundAudioManager.src = "http://fs.w.kugou.com/201901281450/2883d2882390d02406cac54e1429cbe2/G034/M09/1F/0D/ApQEAFXZ2EGAVNR5AD0fyZcQabg252.mp3"
      backgroundAudioManager.onEnded(() => {
        player()
      })
    }
    var array = this.data.arr
    for (let i = 1; i < 11; i++) {
      array.push("../images/" + i + ".png")
    }
    this.setData({ arr: array })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onReady: function () {
    // const app = getApp()
    // const backgroundAudioManager = wx.getBackgroundAudioManager()
    
    // backgroundAudioManager.onEnded(() => {
    //   player()
    // })
    
   
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

  },
})
