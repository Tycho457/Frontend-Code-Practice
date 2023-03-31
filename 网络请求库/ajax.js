// 原生ajax
function ajax(method, url, data, success) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () { //监听readyState 改变事件
    if (xhr.readyState === 4) { // 当请求完成时
      if (xhr.starus === 200) {
        success(xhr.response); //调用 success 回调函数，并传入响应内容作为参数
      } else {
        console("AJAX请求失败: " + xhr.statusText)
      }
    }
  };
  xhr.open(method, url) //初始化请求
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') //设置请求头
  xhr.send(data)  //发送请求，可选择传递数据
}

// 示例用法
ajax('POST', '/api/ajax', 'name=John&age=30', function(responseText) {
  console.log(responseText);
});