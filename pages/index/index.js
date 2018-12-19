
Page({
  data: {
    mode: 'widthFix',
    content: [0, 1, 2, 3, 4],
    swiperIndex:0,
    tab:0,
    isipx: getApp().isIPHONE_X
  },
  
  changeTab:function(e){
    console.log(e)
    let serial = e.target.dataset.serial;
    this.setData({
      tab:e.target.dataset.serial,
      swiperIndex: e.target.dataset.serial
    });

  },

  swiperChange:function(e){
    console.log(e)
    this.setData({
      tab: e.detail.current,
    });
  },

  onLoad: function (options) {

  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
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