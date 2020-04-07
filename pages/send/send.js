// pages/send/send.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const chooseLocation = requirePlugin('chooseLocation');

Page({

  data: {
    address1: "选择地址",
    address2: "选择地址",
    ttype: "请选择物品类型",
    show: false,
    columns: ['文件', '美食', '蛋糕', '手机', '鲜花','钥匙','其他'],
    colums: ['无优惠劵'],
    times:['现在'],
    startDate: "请选择日期",
    value:"",
    add_index1:0,
    add_index2:0,
  },
  //显示弹窗
  showPopup() {
    this.setData({ show: true });
  },
  //弹窗改变
  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
    this.setData({
      ttype: event.detail.value
    })
    
  },
  //弹窗关闭
  onClose() {
    this.setData({ show: false });
  },

  onLoad: function (options) {
    
  },

  
  onReady: function () {

  },

  onShow: function () {
    var that=this;
    const location = chooseLocation.getLocation();
    console.log(location.address)
    
    if (this.data.add_index1 == 0 ){
      that.setData({
        address1: location.address,
        add_index1:1,
        
      })
    }
    else if(this.data.add_index2==0){
      that.setData({
        address2: location.address,
        add_index2: 1
      })
    }
    
  },

 
  onHide: function () {

  },

 
  onUnload: function () {

  },

 
  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  },
  onChange_time(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  onChange_bz(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  chAdd1: function () {
    const key = '7UKBZ-VIPY4-LTBUQ-DKCQG-XMPK6-65BZM'; //使用在腾讯位置服务申请的key
    const referer = '哒哒跑腿'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
    wx.getLocation({
      success: function (res) {
        //console.log(res)
      },
    })
  },
  chAdd2: function () {
    const key = '7UKBZ-VIPY4-LTBUQ-DKCQG-XMPK6-65BZM'; //使用在腾讯位置服务申请的key
    const referer = '哒哒跑腿'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
    wx.getLocation({
      success: function (res) {
        //console.log(res)
      },
    })
  },
})