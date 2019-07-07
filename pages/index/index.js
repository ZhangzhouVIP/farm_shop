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
    ],
    sortImg : [
      {"id":"0", "url":"../image/homeSortImg/1.png", "title":"水果", "color":"#707070"},
      {"id":"1", "url":"../image/homeSortImg/2.png", "title":"干果", "color":"#707070"},
      {"id":"2", "url":"../image/homeSortImg/3.png", "title":"水产", "color":"#707070"},
      {"id":"3", "url":"../image/homeSortImg/4.png", "title":"饮品", "color":"#707070"}
    ],
    sortImgOrg  : [
      {"url":"../image/homeSortImg/1.png", "color":"#707070"},
      {"url":"../image/homeSortImg/2.png", "color":"#707070"},
      {"url":"../image/homeSortImg/3.png", "color":"#707070"},
      {"url":"../image/homeSortImg/4.png", "color":"#707070"}
    ],
    sortImgChg  : [
      {"url":"../image/homeSortImg/11.png", "color":"#FF0000"},
      {"url":"../image/homeSortImg/22.png", "color":"#FF0000"},
      {"url":"../image/homeSortImg/33.png", "color":"#FF0000"},
      {"url":"../image/homeSortImg/44.png", "color":"#FF0000"}
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
  
  catchTap: function(e) {
    // 恢复其他
    for(var item in this.data.sortImg){

      let v_temOrgUrl  = "sortImg[" + item + "].url";
      let temOrgUrl    = this.data.sortImgOrg[item].url;
      let v_temOrgCol  = "sortImg[" + item + "].color";
      let temOrgCol    = this.data.sortImgOrg[item].color;
      
      this.setData({
        [v_temOrgUrl] : temOrgUrl,
        [v_temOrgCol] : temOrgCol
      })
    }
    // 
    
    let itemid    = e.currentTarget.id;

    let v_orgUrl  = "sortImg[" + itemid + "].url";
    let orgUrl    = this.data.sortImgOrg[itemid].url;
    let chgUrl    = this.data.sortImgChg[itemid].url;

    
    let v_orgCol  = "sortImg[" + itemid + "].color";
    let orgCol    = this.data.sortImgOrg[itemid].color;
    let chgCol    = this.data.sortImgChg[itemid].color;


    if(this.data.sortImg[itemid].url == orgUrl && this.data.sortImg[itemid].color == orgCol) {
      this.setData({
        [v_orgUrl] : chgUrl,
        [v_orgCol] : chgCol
      })
    }else{
      this.setData({
        [v_orgUrl] : orgUrl,
        [v_orgCol] : orgCol
      })
    }
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