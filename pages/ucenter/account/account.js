var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();
var index = 0;
var li =[];
Page({
  data: {
    userInfo: {},

    list:li,

   /*--区域选择功能↓--性质和类型--*/
    OwnerShipsTypeList: [],
    CompanyTypeList: [],
    regionType: 1,
    regionList: [],
    selectRegionDone: false,
    arrow_down: "/static/images/arrow_down.png",
    address_right: "/static/images/address_right.png",
    blOpenOwnerShip: false,
    blOpenCompanyType: false,
    selectedOpenOwnerShipId: 0,
    selectedOpenOwnerShipName: '公司性质(必选)',
    selectedCompanyTypeId: 0,
    selectedCompanyTypeName: '业务类型(必选)',


     /*-区域选择功能↑-性质和类型-*/

    /*--接收群发功能↓--*/

    IsGetGroupSend: "接收群发",
    IsGetGroupSendGroup: [{ Id: 0, Name: "Yes" }, { Id: 1, Name: "No" }],
  
    //控制下拉框
    blIsGetGroupSend: false,


 /*---接收群发功能↑--*/
/*区域选择↓*/

    openSelectRegion: false,
    selectRegionList: [
      { Id: 0, NameCn: '国家', parent_id: 0, type: 1 },
      { Id: 0, NameCn: '省份', parent_id: 0, type: 2 },
      { Id: 0, NameCn: '城市', parent_id: 0, type: 3 }
    ],
/*区域选择↑*/ 


/*添加联系人（数据）**/
    accountAdd:
    {
     Name: "",
    Title: "",
     TelPhone: "" ,
     MobilePhone: "" ,
     GetGroupSend: "" ,
     Email: "" ,
      QQ: "" , 

  },
/*添加联系人（数据）*/

  },
  onLoad: function (options) {

      this.getRegisterData(); 
      var that = this;

     // var flag = true;
     var flag = false;
      var sign = 0;
  
      flag = options.flag;
      sign = options.sign;


    console.log("sign:"+sign)
    console.log("flag:" + flag)
    console.log("index:" + options.index)

   
      if(flag)
      {


        li.push
          ({
              "index": index++,
              "name": options.name,
              "title": options.title,
              "telPhone": options.TelPhone,
              "mobilePhone":options.MobilePhone,
              "getGroupSend": options.GetGroupSend,
              "email": options.Email,
               "QQ": options.QQ


        })

    
       that.setData({
         list: li
   
       })

      }
    

     if(sign == '1')
     {
       var that = this
       console.log('我是从修改页面过来的/不要undefined' + options.index)
      
       console.log("index:" + options.index)
       li[options.index].name = options.name;
       li[options.index].title = options.title;
       li[options.index].telPhone = options.TelPhone,
        li[options.index].mobilePhone = options.mobilephone;
       li[options.index].getGroupSend = options.getgroupsend;
       li[options.index].email = options.email;
       li[options.index].QQ = options.qq;
        
       that.setData({
         list: li
       })
     }
  }, 
  addMessage()
  {

      wx.navigateTo({
        url: '/pages/ucenter/accountAdd/accountAdd',
      })


  },


  /*--------------------------接收群发功能↓---------------------------*/
  /*点击打开下拉框（通过bool判定下拉框是否隐藏）*/

  OpenIsGetGroupSend(e) {
    if (this.data.blOpenOwnerShip) {

      this.setData
        ({
          blIsGetGroupSend: false,

        })
    }
    else {
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
      IsGetGroupSendGroup: that.data.IsGetGroupSendGroup

    })
  },



/*-------------------------接收群发功能↑----------------------------*/

/*-------------------------公司功能↓--------区域选择功能----------性质和类型------------- --------*/


  getRegisterData() {
    let that = this;
    let regionType = that.data.regionType;
    util.request(api.RegisterData, {}).then(function (res) {
      if (res.errno === 0) {
        console.log(res.OwnerShipsTypeList);
        that.setData({
          OwnerShipsTypeList: res.OwnerShipsTypeList,
          CompanyTypeList: res.CompanyTypeList,
        });
      }
    });
  },
  openOwnerShipSelect: function (e) {
    if (this.data.blOpenOwnerShip) {
      this.setData({
        blOpenOwnerShip: false,
      });
    }
    else {
      this.setData({
        blOpenOwnerShip: true,
      });
    }
  },
  onClickOwnerShipsTypeListSelect: function (e) {
    var index = e.currentTarget.dataset.index;
    var selectedId = e.currentTarget.dataset.key;
    var selectedName = e.currentTarget.dataset.name;
    this.setData({
      blOpenOwnerShip: false,
      blOpenCompanyType: false,
      selectedOpenOwnerShipId: selectedId,
      selectedOpenOwnerShipName: selectedName
    })
  },
  openCompanyTypeSelect: function (e) {
    if (this.data.blOpenCompanyType) {
      this.setData({
        blOpenCompanyType: false,
      });
    }
    else {
      this.setData({
        blOpenCompanyType: true,
      });
    }
  },
  onClickCompanyTypeListSelect: function (e) {
    var index = e.currentTarget.dataset.index;
    var selectedId = e.currentTarget.dataset.key;
    var selectedName = e.currentTarget.dataset.name;
    this.setData({
      blOpenOwnerShip: false,
      blOpenCompanyType: false,
      selectedCompanyTypeId: selectedId,
      selectedCompanyTypeName: selectedName
    })
  },
  /*-------------------------公司性质功能↑----------------------------*/
/*取消显示公司性质 类型↓*/
  cancelSelectList: function (e) {
    this.setData({
      blOpenOwnerShip: false,
      blOpenCompanyType: false,
    });
  },

/*取消显示公司性质 类型↑*/

/*-------区域选择-区域选择代码组功能模块↓*/
  setRegionDoneStatus() {
    let that = this;
    let doneStatus = that.data.selectRegionList.every(item => {
      console.log("item.type=" + item.type + " | id=" + item.Id);
      if (item.type != 3) {
        return item.Id != 0;
      }
      else {
        return true;
      }
    });

    that.setData({
      selectRegionDone: doneStatus
    })

  },
  chooseRegion() {
    let that = this;
    this.setData({
      openSelectRegion: !this.data.openSelectRegion
    });

    //设置区域选择数据
    console.log(that.data.CountryId + " | " + that.data.StateProvinceId + " | " + that.data.CityId);
    if (that.data.CountryId > 0 && that.data.StateProvinceId > 0 && that.data.CityId > 0) {
      let selectRegionList = this.data.selectRegionList;
      selectRegionList[0].Id = that.data.CountryId;
      selectRegionList[0].NameCn = that.data.CountryName;
      selectRegionList[0].parent_id = 0;

      selectRegionList[1].Id = that.data.StateProvinceId;
      selectRegionList[1].NameCn = that.data.State;
      selectRegionList[1].parent_id = that.data.CountryId;

      selectRegionList[2].Id = that.data.CityId;
      selectRegionList[2].NameCn = that.data.City;
      selectRegionList[2].parent_id = that.data.StateProvinceId;

      this.setData({
        selectRegionList: selectRegionList,
        regionType: 3
      });

      this.getCityList(that.data.StateProvinceId);
    } else {
      this.setData({
        selectRegionList: [
          { Id: 0, NameCn: '国家', parent_id: 0, type: 1 },
          { Id: 0, NameCn: '省份', parent_id: 0, type: 2 },
          { Id: 0, NameCn: '城市', parent_id: 0, type: 3 }
        ],
        regionType: 1
      })
      this.getCountryList();
    }

    this.setRegionDoneStatus();

  },

  selectRegionType(event) {
    let that = this;
    let regionTypeIndex = event.target.dataset.regionTypeIndex;
    let selectRegionList = that.data.selectRegionList;

    //判断是否可点击
    if (regionTypeIndex + 1 == this.data.regionType || (regionTypeIndex - 1 >= 0 && regionTypeIndex - 1 < 2 && selectRegionList[regionTypeIndex - 1].Id <= 0)) {
      return false;
    }

    this.setData({
      regionType: regionTypeIndex + 1
    })

    let selectRegionItem = selectRegionList[regionTypeIndex];
    if (regionTypeIndex == 0) {
      this.getCountryList();
    }
    else if (regionTypeIndex == 1) {
      this.getStateList(selectRegionItem.parent_id);
    }
    else {
      this.getCityList(selectRegionItem.parent_id);
    }

    //this.setRegionDoneStatus();

  },

  cancelSelectRegion() {
    this.setData({
      openSelectRegion: false,
      regionType: this.data.regionDoneStatus ? 3 : 1
    });

  },

  selectRegion(event) {
    let that = this;
    let regionIndex = event.target.dataset.regionIndex;
    let regionItem = this.data.regionList[regionIndex];
    let regionType = regionItem.type;
    let selectRegionList = this.data.selectRegionList;
    selectRegionList[regionType - 1] = regionItem;


    if (regionType != 3) {
      this.setData({
        selectRegionList: selectRegionList,
        regionType: regionType + 1
      })
      if (regionType == 1) {
        this.getStateList(regionItem.Id);
      }
      else if (regionType == 2) {
        this.getCityList(regionItem.Id);
      }
    } else {
      this.setData({
        selectRegionList: selectRegionList
      })
    }

    //重置下级区域为空
    selectRegionList.map((item, index) => {
      if (index > regionType - 1) {
        item.Id = 0;
        item.NameCn = index == 1 ? '省份' : '城市';
        item.parent_id = 0;
      }
      return item;
    });

    this.setData({
      selectRegionList: selectRegionList
    })


    that.setData({
      regionList: that.data.regionList.map(item => {
        //标记已选择的
        if (that.data.regionType == item.type && that.data.selectRegionList[that.data.regionType - 1].Id == item.Id) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        return item;
      })
    });

    this.setRegionDoneStatus();

  },
  doneSelectRegion() {
    if (this.data.selectRegionDone === false) {
      return false;
    }

    var selectRegionList = this.data.selectRegionList;
    var FullRegion = selectRegionList.map(item => {
      if (item.Id > 0) {
        return item.NameCn;
      }
      else {
        return "";
      }
    }).join('');

    this.setData({
      CountryId: selectRegionList[0].Id,
      StateProvinceId: selectRegionList[1].Id,
      CityId: selectRegionList[2].Id,
      CountryName: selectRegionList[0].NameCn,
      State: selectRegionList[1].NameCn,
      City: selectRegionList[2].NameCn,
      FullRegion: FullRegion,
      openSelectRegion: false
    });

  },
  cancelSelectRegion() {
    this.setData({
      openSelectRegion: false,
      regionType: this.data.regionDoneStatus ? 3 : 1
    });

  },
  getCountryList() {
    let that = this;
    let regionType = that.data.regionType;
    util.request(api.GetCountryList, {}).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          regionList: res.CountryList.map(item => {

            //标记已选择的
            if (that.data.selectRegionList[0].Id == item.Id) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            item.type = 1;
            return item;
          })
        });
      }
    });
  },
  getStateList(CountryId) {
    let that = this;
    let regionType = that.data.regionType;
    util.request(api.GetStateList, {
      CountryId: CountryId
    }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          regionList: res.StateList.map(item => {

            //标记已选择的
            if (that.data.selectRegionList[1].Id == item.Id) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            item.type = 2;
            return item;
          })
        });
      }
    });
  },
  getCityList(StateId) {
    let that = this;
    let regionType = that.data.regionType;
    util.request(api.GetCityList, {
      StateId: StateId
    }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          regionList: res.CityList.map(item => {

            //标记已选择的
            if (that.data.selectRegionList[2].Id == item.Id) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            item.type = 3;
            return item;
          })
        });
        console.log(that.data.regionList);
      }
    });
  },
  /*区域选择代码组功能模块↑*/

  addressAdd()
  {

    wx.navigateTo({
      url: '../accountAdd/accountAdd',


    })

  },
  addressUpdate(e)
  {

    console.log("选中的index" + e.currentTarget.dataset.index)


        wx.navigateTo({
          url: '../accountUpdate/accountUpdate?name=' + e.currentTarget.dataset.name + '&title=' + e.currentTarget.dataset.title + '&telPhone=' + e.currentTarget.dataset.telphone + '&mobilePhone=' + e.currentTarget.dataset.mobilephone + '&getGroupSend=' + e.currentTarget.dataset.getgroupsend + '&email=' + e.currentTarget.dataset.email + '&QQ=' + e.currentTarget.dataset.qq + '&flag=true' + "&index=" + e.currentTarget.dataset.index
        })


  }
})


