Page({
  data: {
    post : {},
    id: ''
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    console.log('===detail====:', options.id)
    this.setData({ id: options.id })
  },
  onReady: function() {
    //Do some when page show.
  },
  onShow: function() {
    //Do some when page ready.
    const that = this;
    const id   = this.data.id;

    wx.request({
      url: `https://cnodejs.org/api/v1/topic/${id}?mdrender=false`,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        that.setData({
          post: res.data.data
        })
      }
    })
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  }
})