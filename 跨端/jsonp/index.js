// 后端代码
const http = require('http');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 获取请求中的 callback 参数
  const callback = req.query.callback;

  // 定义要返回的数据
  const data = {
    name: 'Alice',
    age: 18,
    gender: 'female'
  };

  // 将数据转换成 JSONP 格式，并设置 Content-Type 和字符集
  const jsonData = `${callback}(${JSON.stringify(data)})`;
  res.setHeader('Content-Type', 'application/javascript;charset=utf-8');

  // 将 JSONP 数据发送给客户端
  res.end(jsonData);
});

// 监听端口
server.listen(80, () => {
  console.log('Server is running on port 80');
});
