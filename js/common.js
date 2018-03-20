function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

(function()  {  
  var  hm  =  document.createElement("script");  
  hm.src  =  "https://hm.baidu.com/hm.js?6deb463ed3cb2a9af06b3d31838d3735";  
  var  s  =  document.getElementsByTagName("script")[0];   
  s.parentNode.insertBefore(hm,  s);
})();

$("html").append("<div id ='cover2'/>");

$(function()  { 
  setTimeout(function() {
    $("#cover2").remove();
  }, 5)
});

document.write('<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">')

var version = "20180301";
var isCache = true;

function cacheComponents(url, callback) {
  var key = version + url;
  var html = "";
  if (isCache & localStorage[key]) {
    html = localStorage[key];
    callback(html)
    $.get(url).then(function(res) {
      localStorage[key] = res;
    })
  } else {
    $.get(url).then(function(res) {
      localStorage[key] = res;
      callback(res)
    })
  }
}
