var QQMapWX = require('../../lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data:{
    city:''
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '7UKBZ-VIPY4-LTBUQ-DKCQG-XMPK6-65BZM'
    });
  },
  onShow: function () {
    // 调用接口
    var that=this;
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        that.setData({
          city: res.data[0].ad_info.city + res.data[0].ad_info.district
        }),
        console.log(that.data.city)
      },
      
    })
  }
})

// var addr=require('../../lib/qqmap-wx-jssdk1.2/address.js')

// Page({
//   data: {
//     city:""
//   },

//   onLoad: function (options) {
   
    
//   },

//   onShow: function () {
    
//   },

 
// })