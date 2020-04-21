Page({
    data: {
        phone: "15990039015",
        email: "miqilin18@gmail.com",
        wx: "lzm994718917",
        qq: "994718917",
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onClipboardData: function(n) {
        var a = n.currentTarget.dataset.text;
        wx.setClipboardData({
            data: a
        });
    },
    onMakePhoneCall: function(n) {
        var a = n.currentTarget.dataset.text;
        wx.makePhoneCall({
            phoneNumber: a
        });
    }
});