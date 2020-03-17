App({
//生命周期函数：后台存活两个小时
  onLaunch: function () {
  // 异步调用->
  //  wx.getUserInfo({
  //    success: function(res){
  //      console.log(res)
  //    }
  //  })
  // setTimeout(function(){  //延迟发生
  //     const err=new Error()
  //     throw err   //抛出错误
  // },3000)

  
  },
  onShow: function (options) {
    // console.log('页面显示：onshow()')
    // //判断小程序的进入场景。
    // console.log(options)
    // switch(options.scene){
    //   case 1001:
    //   break;
    //   case 1002:
    //   break;
    // }
  },
  onHide: function () {
    console.log('隐藏时执行：onhide')
  },
  onError: function (msg) {
    console.log('错误时执行：onerror')
  }
})
