// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg',
    'header_pic':'../images/photo.jpg',
    list: [
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
    ],
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15540897967',
    })
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
  
  }
})