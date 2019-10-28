// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      Name:"",
      PhoneNum:""


  },
  inputName(e)
  {
    var that = this

     that.data.Name = e.detail.value

  },

  inputPhoneNum(e)
  {
    var that = this
    that.data.inputPhoneNum = e.detail.value

  
  },


  sendMes()
  {
      var that = this;
      
     console.log(that.data.Name)
    console.log(that.data.inputPhoneNum)

      wx.redirectTo({
        url: "../index/index?name=" + that.data.Name + "&inputPhoneNum=" + that.data.inputPhoneNum

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