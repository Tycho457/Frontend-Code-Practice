// 创建 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();
// 设置请求参数
xhr.open('GET', 'http://example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() {
    // 监听响应状态变化和响应内容
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 处理响应数据
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
// 发送请求
xhr.send();