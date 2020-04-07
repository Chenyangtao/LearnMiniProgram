// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infos:[
      { icon: 'buy_1.png', tet: '任意买' },
      { icon: 'cc_1.png', tet: '买早餐' },
      { icon: 'coffee_1.png', tet: '买咖啡' },
      { icon: 'hx_1.png', tet: '买海鲜' },
      { icon: 'sc_1.png', tet: '买蔬菜' },
      { icon: 'jiu_1.png', tet: '买酒' },
      { icon: 'yw_1.png', tet: '买药物' },
      { icon: 'xy_1.png', tet: '买宵夜' },
    ]
  },
  handleBuy(e){
    //console.log(e.currentTarget.dataset.tet);
    
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