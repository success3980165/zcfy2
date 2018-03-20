Vue.component('hulai-header', function(resolve, reject) {
  var url = "components/header.html";
  cacheComponents(url, function(res) {
    resolve({
      template: res,
      data: function() {
        return {
          nav: false
        }
      }
    })
  })
})
