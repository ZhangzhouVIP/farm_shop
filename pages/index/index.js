Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent : 0,
    indicatorDots : true,
    autoplay  : true,
    inteval : 3000,
    duration  : 800,
    circular  : true,
    imgUrls : [
      
      "../image/Carousel/apple.jpg",
      "../image/Carousel/Grape.jpg",
      "../image/Carousel/heblin.jpg",
      "../image/Carousel/peach.jpg",
      "../image/Carousel/pear.jpg"
    ]
  },

  swiperChange : function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
    //console.log("swiperChange===" + this.data.swiperCurrent);
  },

  chuangEvent:function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
    //console.log("chuangEvent===" + this.data.swiperCurrent);
  },

  swipclick: function(e) {
    //console.log("swipclick===" + this.data.swiperCurrent);
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