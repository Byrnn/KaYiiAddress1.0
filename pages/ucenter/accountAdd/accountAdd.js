var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountAdd:
    {
        Name:"",
        Title:"",
        TelPhone:"",
        MobilePhone:"",
        GetGroupSend:"",
        Email:"",
        QQ:"",
        index:0

    },

    
/*----------data接收群发功能↓---------------------*/

    IsGetGroupSend:"接收群发",
    IsGetGroupSendGroup: [{ Id: 0, Name: "Yes" }, { Id: 1, Name: "No" }], 
    arrow_down: "/static/images/arrow_down.png", 
    //blIsGetGroupSend控制下拉框是否打开及^符号
   blIsGetGroupSend: false,

   
 /*----------------接收群发功能↑----------------*/
  },

  bindinputName(event)
  {
    let that = this
    let accountAdd = this.data.accountAdd;


    accountAdd.Name = event.detail.value;
     
    that.setData
    ({
        accountAdd: accountAdd

    })


  },
  bindinputTitle(event)
  {
    let that = this
    let accountAdd = this.data.accountAdd;

    accountAdd.Title = event.detail.value;

    that.setData
      ({
        accountAdd: accountAdd

      })


  }, 
  bindinputTelPhone(event)
  {

    let that = this
    let accountAdd = this.data.accountAdd;

    accountAdd.TelPhone = event.detail.value;

    that.setData
      ({
        accountAdd: accountAdd

      })



  },
  bindinutMobilePhone(event)
    {

     let that = this
     let accountAdd = this.data.accountAdd;

     accountAdd.MobilePhone = event.detail.value;

     that.setData
       ({
         accountAdd: accountAdd

       })


  },
  bindinputGetGroupSend(event)
  {

    let that = this
    let accountAdd = this.data.accountAdd;

    accountAdd.GetGroupSend = event.detail.value;

    that.setData
      ({
        accountAdd: accountAdd

      })

  },
  
  bindinputEmail(event)
  {
     let that = this
     let accountAdd = this.data.accountAdd;

          accountAdd.Email = event.detail.value;

     that.setData
       ({
         accountAdd: accountAdd

       })


  },

  bindinputQQ(event)
  {
     let that = this
     let accountAdd = this.data.accountAdd;

       accountAdd.QQ = event.detail.value;

     that.setData
       ({
         accountAdd: accountAdd

       })


  },






  saveMessage(e)
  {
    let that = this;


    var regEmail = util.regexConfig().email;
    var regPhone = util.regexConfig().phone;
   
   
    /*if (that.data.accountAdd.MobilePhone == "" || !regPhone.test(that.data.accountAdd.MobilePhone))
    {

      util.showErrorToast('手机格式有误');
      return false;

    }  
    
    
    
    
    else if (that.data.accountAdd.Email == "" || !regEmail.test(that.data.accountAdd.Email)) {
  util.showErrorToast('邮箱格式有误');
  return false;
}
  else*/
  {
     var flag = false;
      console.log(that.data.accountAdd)
     
    wx.redirectTo({
   /*   url: '../../chooseAddre/chooseAddre?tel=' + that.data.accountAdd.MobilePhone + "&addre=" + that.data.accountAdd.MobilePhone + "&door=" + that.data.accountAdd.MobilePhone + "&name=" + that.data.accountAdd.MobilePhone + "&area=" + that.data.accountAdd.MobilePhone + "&flag=" + flag + "&areavalue=" + that.data.accountAdd.MobilePhone + "&addrevalue=" + that.data.accountAdd.MobilePhone + "&door=" + that.data.accountAdd.MobilePhone
   */
      url: '../account/account?name=' + that.data.accountAdd.Name + "&title=" + that.data.accountAdd.Title + "&TelPhone=" + that.data.accountAdd.TelPhone + "&MobilePhone=" + that.data.accountAdd.MobilePhone + "&GetGroupSend=" + that.data.accountAdd.GetGroupSend + "&Email=" + that.data.accountAdd.Email + "&QQ=" + that.data.accountAdd.QQ + "&flag=" + flag 
    
   })

  }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }

  },

  navigateBack()
  {
      wx.navigateTo({
        url: '/pages/ucenter/account/account',


      })


  },
  

  
/*--------------------------接收群发功能↓---------------------------*/
/*点击打开下拉框（通过bool判定下拉框是否隐藏）*/

  OpenIsGetGroupSend(e)
  {
   if(this.data.blOpenOwnerShip)
   {

     this.setData
     ({
      blIsGetGroupSend: false,

     })
   }
   else 
   {
     this.setData
     ({
      blIsGetGroupSend: true,
     });
   }
  },

  /*绿色区域确认*/
  onClickIsGetGroupSend: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var selectedId = e.currentTarget.dataset.key;
    var selectedName = e.currentTarget.dataset.name;
    this.setData({
     blIsGetGroupSend: false,
      blOpenCompanyType: false,
      IsGetGroupSend: selectedName
    })
  },

  /* 打开"接收群发"选择区域（绿色）   */
  openIsGetGroupSend: function (e) {
    if (this.data.blOpenOwnerShip) {
      this.setData({
       blIsGetGroupSend: false,
      });
    }
    else {
      this.setData({
       blIsGetGroupSend: true,
      });
    }
  },

   /*获取群发数据*/getRegisterData() {
    let that = this;
    let regionType = that.data.regionType;



    that.setData({
      IsGetGroupSendGroup: that.data.IsGetGroupSendGroup.Name

    })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getRegisterData();

  },

/*-------------------------接收群发功能↑----------------------------*/


 CancelIsGetGroupSend()
 {
   var that = this;
   that.setData({

     blIsGetGroupSend: false

   })
   
  },


/*formSubmit*/


  formSubmit:function(e)
{

    var that = this;
console.log(that.data.accountAdd)


}

})







