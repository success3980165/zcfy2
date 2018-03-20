new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(27, false),
    listName: '',
    informationName: '',
    listData: [],
    lunboArr: [],
    lunboName: '',
    featureArr: [],
    isChecked: 1,
    isInformation: 1,
    informationData: [],
    more_href: ''
  },
  mounted: function() {
    var that = this;
    that.initData();
  },
  methods: {
    express: function() {
      alert("敬请期待!")
    },
    initData: function() {
      var that = this;
      that.goGetLunbo();
      that.goGetFeature('主线副本');
      that.goGetList('新闻公告-新闻', 1, 6);
      that.goGetInformation('游戏资料-最新', 1, 6);
    },
    goGetLunbo: function() {
      var that = this;
      var params = {};
      params.categoryName = '轮播图';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result.rows)
        that.lunboArr = result.rows;
        that.$nextTick(function() {
          that.mySwiper = new Swiper('.shouye_swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // spaceBetween: 30,
            centeredSlides: true,
            // autoplay: 2500,
            // autoplayDisableOnInteraction: false,
            // loop: true
            paginationClickable: true,
            observer: true,
            loop: true,
            // autoplay: 2500,
          })
        })
      })
    },
    goGetList: function(str, num, rows) {
      var that = this;
      if (str == '新闻公告-新闻') {
        that.more_href = 'list.html?type=xinwen';
        that.listName = '新闻';
      }
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      // that.listName = str;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        that.listData = result.rows;
        console.log(that.listData)
        listData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'detail.html?id=' + item.id;
        })
      })
    },
    goGetFeature: function(str) {
      var that = this;
      that.featureArr = [];
      var params = {};
      if (str == '主线副本') {
        that.isChecked = 1
      } else if (str == '核心玩法') {
        that.isChecked = 2;
      } else if (str == '中超特色') {
        that.isChecked = 3;
      } else if (str == '阵型战术') {
        that.isChecked = 4;
      } else if (str == '模拟经营') {
        that.isChecked = 5;
      }
      params.categoryName = '游戏特色';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result.rows)
        var data = result.rows;
        var i = 0;
        for (i = 0; i < data.length; i++) {
          if (data[i].fields['标题'] === str) {
            console.log(str)
            that.featureArr.push(data[i])
          }
        }
        console.log(that.featureArr)
      })
    },
    goGetInformation: function(str, num, rows) {
      var that = this;
      if (str == '游戏资料-最新') {
        that.more_href = 'gameInformation.html?type=zuixin';
        that.informationName = '最新';
        that.isInformation = 1;
      } else if (str == '游戏资料-新手') {
        that.more_href = 'gameInformation.html?type=xinshou';
        that.informationName = '新手';
        that.isInformation = 2;
      } else if (str == '游戏资料-进阶') {
        that.more_href = 'gameInformation.html?type=jinjie';
        that.informationName = '进阶';
        that.isInformation = 3;
      } else if (str == '游戏资料-玩法') {
        that.more_href = 'gameInformation.html?type=wanfa';
        that.informationName = '玩法';
        that.isInformation = 4;
      }
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      // that.informationName = str;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var informationData = result.rows;
        that.informationData = result.rows;
        console.log(that.informationData)
        informationData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'detail.html?id=' + item.id;
        })
      })
    }
  }

})