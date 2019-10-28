// pages/ucenter/accountUpdate/accountUpdate.js
Page({

  data: 
  {

    IsGetGroupSend: "接收群发",
    IsGetGroupSendGroup: [{ Id: 0, Name: "Yes" }, { Id: 1, Name: "No" }],
    arrow_down: "/static/images/arrow_down.png",
    //blIsGetGroupSend控制下拉框是否打开及^符号
    blIsGetGroupSend: false,
    index: 0



  },

  onLoad: function (options) {
this.setData
({

  name: options.name,
  title: options.title,
  telPhone: options.telPhone,
  mobilePhone: options.mobilePhone,
  getGroupSend: options.getGroupSend,
  email: options.email,
  QQ: options.QQ,
  index: options.index

})
    console.log("传过来的index：" + options.index);
    console.log("接收到的index：" + this.data.index);

  },

  formSubmit: function (e) 
  {

    var that = this;

    console.log('form发生了submit事件，携带数据为：', e.detail.value)




    wx.redirectTo({
      url: '../account/account?name=' + e.detail.value.name + '&title=' + e.detail.value.title + '&telphone=' + e.detail.value.telphone + '&mobilephone=' + e.detail.value.mobilephone + '&getgroupsend=' + e.detail.value.getgroupsend + '&email=' + e.detail.value.email + '&qq=' + e.detail.value.qq + '&flag=true' + '&sign=' + '1' + "&index=" + that.data.index,
      
    })

  },
  navigateBack()
  {

    wx.navigateBack({
      
    })
  }

})