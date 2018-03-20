Vue.component('hulai-headertwo', function(resolve, reject) {
  var url = "components/headertwo.html";
  cacheComponents(url, function(res) {
    vueHeaderTwo.bindVue(resolve, res)
  })
})


var vueHeaderTwo = {
  bindAnimate: function() {
    $(".linehight_1").mouseenter(function() {
      $(".logo_1").css({
        "background": "url(img/logo_1.jpg)"
      })
    })
    $(".linehight_1").mouseleave(function() {
      $(".logo_1").css({
        "background": "url(img/logo_0.jpg)"
      })
    })
    $(".linehight_2").mouseenter(function() {
      $(".logo_2").css({
        "background": "url(img/logo_2.jpg)"
      })
    })
    $(".linehight_2").mouseleave(function() {
      $(".logo_2").css({
        "background": "url(img/logo_0.jpg)"
      })
    })
    $(".linehight_3").mouseenter(function() {
      $(".logo_3").css({
        "background": "url(img/logo_3.jpg)"
      })
    })
    $(".linehight_3").mouseleave(function() {
      $(".logo_3").css({
        "background": "url(img/logo_0.jpg)"
      })
    })
    $(".linehight_4").mouseenter(function() {
      $(".logo_4").css({
        "background": "url(img/logo_4.jpg)"
      })
    })
    $(".linehight_4").mouseleave(function() {
      $(".logo_4").css({
        "background": "url(img/logo_0.jpg)"
      })
    })
    $(".linehight_1").mouseenter(function() {
      $(".logo_1").css({
        "background": "url(img/logo_1.jpg)"
      })
    })
    $(".linehight_2").mouseenter(function() {
      $(".logo_2").css({
        "background": "url(img/logo_2.jpg)"
      })
    })
    $(".linehight_3").mouseenter(function() {
      $(".logo_3").css({
        "background": "url(img/logo_3.jpg)"
      })
    })
    $(".linehight_4").mouseenter(function() {
      $(".logo_4").css({
        "background": "url(img/logo_4.jpg)"
      })
    })
    $(".contact_us").mouseenter(function() {
      $(".head_bottom").slideDown(300)
    })
    $(".contact_us").mouseleave(function() {
      $(".head_bottom").slideUp(300)
    })
    $(".gonglv").mouseenter(function() {
      $(".head_ziliao").slideDown(300)
    })
    $(".zixun,.gonglv").mouseleave(function() {
      $(".head_ziliao").slideUp(300)
    })
  },
  bindVue: function(resolve, res) {
    resolve({
      template: res,
      data: function() {
        return {
          cover: false,
          video_play: false,
          video_close: false
        }
      },
      mounted: function() {
        vueHeaderTwo.bindAnimate();
        this.initData();
      },
      methods: {
        initData: function() {
          var that = this;
        },
        closeVideo: function() {
          this.cover = false;
          this.video_play = false;
        },
        clickVideo: function() {
          this.cover = true;
          this.video_play = true;
          console.log(111)
        },
      }
    })
  }
}
