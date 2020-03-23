// pages/wxml/wxml.js
Page({

  
  data: {
    message:'你好',
    firstname:'robe',
    lastname:'bryant',
    age:12,
    isActive:false,
    isShow:true
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleTimeString()
      })
    },1000)
  },
  handleSwichColor(){
    this.setData({
      isActive:! this.data.isActive
    })
  }
})