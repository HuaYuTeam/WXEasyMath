// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonArray: [{
      name: "button_1",
      id: "button_1",
      text: "创建班级",
      type: "primary",
      even: "createClass",
    }, {
      name: "button_2",
      id: "button_2",
      text: "查询成绩",
      type: "default",
      even: "searchGrades",
    }]
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
  
  },
  searchGrades: function (e) {
    wx.navigateTo({
      url: '../listGrade/listGrade'
    })
  }
})