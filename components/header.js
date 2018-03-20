Vue.component('hulai-header', function(resolve, reject) {
  var url = "components/header.html";
  cacheComponents(url, function(res) {
    var acJquery = {
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
        $(function() {
          $(".one").click(function() {
            $("html,body").animate({
              scrollTop: 0
            }, 300);
            $(".one").css({
              "background": "url(img/float_ulbg.png)"
            })
            $(this).siblings().css({
              "background": "none"
            })
          });
        })
        $(function() {
          $(".two").click(function() {
            $("html,body").animate({
              scrollTop: 800
            }, 300);
            $(".two").css({
              "background": "url(img/float_ulbg.png)"
            })
            $(this).siblings().css({
              "background": "none"
            })
          });
        })
        $(function() {
          $(".three").click(function() {
            $("html,body").animate({
              scrollTop: 1100
            }, 300);
            $(".three").css({
              "background": "url(img/float_ulbg.png)"
            })
            $(this).siblings().css({
              "background": "none"
            })
          });
        })
        $(function() {
          $(".four").click(function() {
            $("html,body").animate({
              scrollTop: 1450
            }, 300);
            $(".four").css({
              "background": "url(img/float_ulbg.png)"
            })
            $(this).siblings().css({
              "background": "none"
            })
          });
        })
        $(function() {
          $(".five").click(function() {
            $("html,body").animate({
              scrollTop: 1850
            }, 500);
            $(".five").css({
              "background": "url(img/float_ulbg.png)"
            })
            $(this).siblings().css({
              "background": "none"
            })
          });
        })

        $(function() {
          $(window).scroll(function() {
            var top = $(window).scrollTop();
            console.log(top);

            if (top < 1) {
              $(".one").css({
                "background": "url(img/float_ulbg.png)"
              })
              $(".one").siblings().css({
                "background": "none"
              })
            } else if (top < 801) {
              $(".two").css({
                "background": "url(img/float_ulbg.png)"
              })
              $(".two").siblings().css({
                "background": "none"
              })
            } else if (top < 1101) {
              $(".three").css({
                "background": "url(img/float_ulbg.png)"
              })
              $(".three").siblings().css({
                "background": "none"
              })
            } else if (top < 1451) {
              $(".four").css({
                "background": "url(img/float_ulbg.png)"
              })
              $(".four").siblings().css({
                "background": "none"
              })
            } else if (top < 1851) {
              $(".five").css({
                "background": "url(img/float_ulbg.png)"
              })
              $(".five").siblings().css({
                "background": "none"
              })
            }
          });
        });
        var myFloat = document.getElementById('float')
        $(".float_1").click(function() {
          var val = myFloat.style.right;
          console.log()
          if (val == '0px') {
            $(".float").animate({
              right: "-187px"
            });
            $(".float_1").css({
              "background": "url(img/a.png)"
            })
          } else {
            $(".float_1").css({
              "background": "url(img/b.png)"
            })
            $(".float").animate({
              right: "0px"
            });
          }
        })
      }
    }
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
        acJquery.bindAnimate();
        this.initData();
      },
      methods: {
        closeVideo: function() {
          this.cover = false;
          this.video_play = false;
        },
        clickVideo: function() {
          this.cover = true;
          this.video_play = true;
        },
        initData: function() {
          var that = this;
        },
        goGetColor: function(str) {
          var that = this;
          if (str == 'home') {
            that.isColor = 1;
            console.log("1")
          } else if (str == 'activity') {
            that.isColor = 2;
            console.log("2")
          } else if (str == 'data') {
            that.isColor = 3;
          } else if (str == 'insteraction') {
            that.isColor = 4;
          }
        },
        qidai: function() {
          alert("敬请期待！")
        }
      }
    })
  })
})
