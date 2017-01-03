// const moment = require('../../node_modules/moment/src/moment');
// 处理时间的小工具函数
// const stamptime2str = (date) => {
//   return moment(date).format('YYYY-MM-DD HH')
// };
Page({
  data: {
    arr: null,
    opts: {
      page: 1,
      tab: '',
      limit: 10,
      mdrender: false
    }
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    this.fetchData()
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    this.fetchData()
  },
  //同意获取数据函数
  fetchData: function() {
    let that   = this;
    const {page, tab, limit} = this.data.opts;

    wx.request({
      url: `https://cnodejs.org/api/v1/topics`,
      data: {
        page: page,
        tab : tab,
        limit: limit 
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if(res.data.success){
          let resData = res.data.data
          that.setData({
            arr: resData
          })
        }
      }
    })
  },
  //滚动触底加载新数据
  lower: function(e){
    console.log('====')
    this.setData({
      'opts.page' : this.data.opts.page + 1
    })

    this.fetchData()
  },
  gotoDetail: function(e){
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    })
  }
})