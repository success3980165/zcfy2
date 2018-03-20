new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(27, false),
    listName: '',
    teseName: '',
    ziliaoName: '',
    listData: [],
    ziliaoData: [],
    lunboArr: [],
    lunboArrTwo: [],
    lunboArrThree: [],
    isChecked: 1,
    isTeSeChecked: 1,
    isZiLiaoChecked: 1,
    ziliaoData: [],
    teseData: [],
    cover: false,
    video_play: false,
    video_close: false,
    more_href: '',
    ziliao_href: '',
    lunboName: ''
  },
  created: function() {
    var that = this;

  },
  mounted: function() {
    var that = this;
    that.initData();
  },
  methods: {
    initData: function() {
      var that = this;
      that.goGetLunbo();
      that.goGetLunboTwo();
      that.goGetLunboThree();
      that.goGetList('新闻公告-最新', 1, 7);
      that.goGetZiLiao('游戏资料-最新', 1, 7);
      that.goGetTese('主线副本');
    },
    goGetList: function(str, num, rows) {
      var that = this;
      if (str == '新闻公告-最新') {
        that.more_href = 'pclist.html?type=zuixin';
        that.listName = '最新';
        that.isChecked = 1;
      } else if (str == '新闻公告-新闻') {
        that.more_href = 'pclist.html?type=xinwen';
        that.listName = '新闻';
        that.isChecked = 2;
      } else if (str == '新闻公告-活动') {
        that.more_href = 'pclist.html?type=huodong';
        that.listName = '攻略';
        that.isChecked = 3;
      } else if (str == '新闻公告-公告') {
        that.more_href = 'pclist.html?type=gonggao';
        that.listName = '公告';
        that.isChecked = 4;
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
          item.hrefVal = 'pcdetail.html?id=' + item.id;
        })
      })
    },
    goGetZiLiao: function(str, num, rows) {
      var that = this;
      if (str == '游戏资料-最新') {
        that.ziliao_href = 'zllist.html?type=ziliaozuixin';
        that.ziliaoName = '最新';
        that.isZiLiaoChecked = 1;
      } else if (str == '游戏资料-新手') {
        that.ziliao_href = 'zllist.html?type=xinshou';
        that.ziliaoName = '新手';
        that.isZiLiaoChecked = 2;
      } else if (str == '游戏资料-进阶') {
        that.ziliao_href = 'zllist.html?type=jinjie';
        that.ziliaoName = '进阶';
        that.isZiLiaoChecked = 3;
      } else if (str == '游戏资料-玩法') {
        that.ziliao_href = 'zllist.html?type=wanfa';
        that.ziliaoName = '玩法';
        that.isZiLiaoChecked = 4;
      }
      var params = {};
      params.categoryName = str;
      params.page = num;
      params.rows = rows;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var ziliaoData = result.rows;
        that.ziliaoData = result.rows;
        console.log(that.ziliaoData)
        ziliaoData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'pcdetail.html?id=' + item.id;
        })
      })
    },
    goGetTese: function(str) {
      var that = this;
      that.teseData = [];
      if (str == '主线副本') {
        that.teseName = '主线副本';
        that.isTeSeChecked = 1;
      } else if (str == '核心玩法') {
        that.teseName = '核心玩法';
        that.isTeSeChecked = 2;
      } else if (str == '中超特色') {
        that.teseName = '中超特色';
        that.isTeSeChecked = 3;
      } else if (str == '阵型战术') {
        that.teseName = '阵型战术';
        that.isTeSeChecked = 4;
      } else if (str == '模拟经营') {
        that.teseName = '模拟经营';
        that.isTeSeChecked = 5;
      }
      var params = {};
      params.categoryName = '游戏特色';
      that.teseName = str;
      that.hoolaiCmsAPI.getList(params, function(result) {
        var teseDate = result.rows;
        // that.teseDate = result.rows;
        console.log(that.teseDate)
        var i = 0;
        for (i = 0; i < teseDate.length; i++) {
          if (teseDate[i].fields['标题'] === str) {
            that.teseData.push(teseDate[i])
          }
          console.log(that.teseData)
        }
        // teseDate.forEach(function(item) {
        //   item.updated = item.created.substr(0, 10);
        //   item.hrefVal = 'pcdetail.html?id=' + item.id;
        // })
      })
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
            centeredSlides: true,
            autoplay: 2500,
            observer: true,
            loop: true,
          })
        })
      })
    },
    goGetLunboTwo: function() {
      var that = this;
      var params = {};
      params.categoryName = '球员展示';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result.rows)
        that.lunboArrTwo = result.rows;
        that.$nextTick(function() {
          that.teseSwiper = new Swiper(".portal .swiper-container", {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            observer: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            hideOnClick: true,
            loop: true,
            hiddenClass: 'my-button-hidden'
          });
        })
      })
    },
    goGetLunboThree: function() {
      var that = this;
      var params = {};
      params.categoryName = '游戏截图';
      that.hoolaiCmsAPI.getList(params, function(result) {
        console.log(result.rows)
        that.lunboArrThree = result.rows;
        that.$nextTick(function() {
          that.mySwiper = new Swiper('.jietu_swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
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
  }
})