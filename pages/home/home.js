// pages/home/home.js
var QQMapWX = require('../../lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js');
var qqmapsdk;

// const chooseLocation = requirePlugin('chooseLocation');
Page({
  goToSend(){
    wx.navigateTo({
      url: '/pages/send/send',
    })
  },
  goToGet(){
    wx.navigateTo({
      url: '/pages/get/get',
    })
  },
  goToBuy() {
    wx.navigateTo({
      url: '/pages/buyList/buList',
    })
  },
  goToQu() {
    wx.navigateTo({
      url: '/pages/line/line',
    })
  },
  // chAdd:function(){
  //   const key = '7UKBZ-VIPY4-LTBUQ-DKCQG-XMPK6-65BZM'; //使用在腾讯位置服务申请的key
  //   const referer = '哒哒跑腿'; //调用插件的app的名称
  //   const location = JSON.stringify({
  //     latitude: 39.89631551,
  //     longitude: 116.323459711
  //   });
  //   const category = '生活服务,娱乐休闲';

  //   wx.navigateTo({
  //     url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
  //   });
  //   wx.getLocation({
  //     success: function (res) {
  //       console.log(res)
  //     },
  //   })
  // },
  
  data: {
     city:"",
    province: '',
    
    latitude: '',
    longitude: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '7UKBZ-VIPY4-LTBUQ-DKCQG-XMPK6-65BZM'
    });
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
    // const location = chooseLocation.getLocation();
    // this.setData({
    //   city: location.city
    // })
    //定位
    var that = this;
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        that.setData({
          city: res.data[0].ad_info.city + res.data[0].ad_info.district
        }),
          console.log(that.data.city)
      },

    })
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
