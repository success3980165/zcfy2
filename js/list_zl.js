new Vue({
  el: "#app",
  data: {
    hoolaiCmsAPI: new hoolaiCmsAPI(27, false),
    listName: '',
    listData: [],
    all: 8,
    cur: 1,
    more1: true,
    isChecked: 1
  },
  watch: {
    cur: function(oldValue, newValue) {
      console.log(arguments);
    }
  },
  computed: {
    indexs: function() {
      var left = 1;
      var right = this.all;
      var ar = [];
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2
          right = this.cur + 2
        } else {
          if (this.cur <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  created: function() {
    this.initData()
  },
  methods: {
    btnClick: function(indexVal) { //页码点击事件
      var that = this;
      console.log(indexVal);
      var str = '';
      if (that.listName == '最新') {
        str = '游戏资料-最新'
      } else if (that.listName == '新手') {
        str = '游戏资料-新手';
      } else if (that.listName == '进阶') {
        str = '游戏资料-进阶';
      } else if (that.listName == '玩法') {
        str = '游戏资料-玩法';
      }
      that.goGetList(str, indexVal, 11);
    },
    initData: function() {
      var that = this;
      var type = getUrlParam('type');
      // var locationHrefArr = window.location.href.split("=");
      // var tag = locationHrefArr[locationHrefArr.length - 1]
      if (type == 'ziliaozuixin') {
        that.goGetList('游戏资料-最新', 1, 11);
      } else if (type == 'xinshou') {
        that.goGetList('游戏资料-新手', 1, 11);
      } else if (type == 'jinjie') {
        that.goGetList('游戏资料-进阶', 1, 11);
      } else if (type == 'wanfa') {
        that.goGetList('游戏资料-玩法', 1, 11);
      }
    },
    goGetList: function(str, num, rows) {
      if (rows) {
        this.cur = num;
      }
      var that = this;
      if (str == '游戏资料-最新') {
        that.listName = '最新';
        that.isChecked = 1;
      } else if (str == '游戏资料-新手') {
        that.listName = '新手';
        that.isChecked = 2;
      } else if (str == '游戏资料-进阶') {
        that.listName = '进阶';
        that.isChecked = 3;
      } else if (str == '游戏资料-玩法') {
        that.listName = '玩法';
        that.isChecked = 4;
      }
      var params = {};
      // 1: 获取推荐的文章
      // params.isRecommend = 1;
      // 2: 获取某个类型的所有文章
      params.categoryName = str;
      // 3: 分页 page 默认显示第1页
      // params.page = 1;
      params.page = num;
      // 4: 每页显示多少个 默认10个
      params.rows = rows;
      // that.listName = str;

      that.hoolaiCmsAPI.getList(params, function(result) {
        var listData = result.rows;
        if (listData.length < 11 && num == 1) {
          that.more1 = false;
        } else {
          that.more1 = true;
        }
        that.listData = result.rows;
        console.log(that.listData)
        listData.forEach(function(item) {
          item.updated = item.created.substr(0, 10);
          item.hrefVal = 'zldetail.html?id=' + item.id;
        })
        // 总页数
        that.all = Math.ceil(result.total / params.rows);
      })
    },
  }
})