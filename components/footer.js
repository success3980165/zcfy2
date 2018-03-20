Vue.component('hulai-footer', function(resolve, reject) {
  var url = "components/footer.html";
  cacheComponents(url, function(res) {
    resolve({
      template: res
    })
  })
})
