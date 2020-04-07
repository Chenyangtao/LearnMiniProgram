// pages/buyList/buList.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const chooseLocation = requirePlugin('chooseLocation');
Page({
  data: {
    show: false,
    columns: ['文件', '宁波', '温州', '嘉兴', '湖州'],
    value: '',
    address:'选择地址'
  },
  showPopup() {
    this.setData({ show: true });
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
    this.setData({
      ttype: event.detail.value
    })
  },
  onClose(e) {
    this.setData({ show: false });

  }
  ,
  onChange_type(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
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
    var that = this;
    const location = chooseLocation.getLocation();
    console.log(location.address)
    that.setData({
      address: location.address

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

  },
  chAdd: function () {
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