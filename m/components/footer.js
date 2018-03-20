Vue.component('hulai-footer', function(resolve, reject) {
  var url = "components/footer.html";
  cacheComponents(url, function(res) {
    resolve({
      template: res,
      data: function() {
        return {
          cover: false,
          cross: true,
          qq: false,
          gzh: false
        }
      },
      methods: {
        openQq: function() {
          this.cover = true;
          this.qq = true;
        },
        closeAll: function() {
          this.cover = false;
          this.qq = false;
          this.gzh = false;
        },
        openGzh: function() {
          this.cover = true;
          this.gzh = true;
        }
      }
    })
  })
})
