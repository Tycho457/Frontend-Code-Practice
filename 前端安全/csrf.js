// Cross-Site Request Forgery（攻击）
// 攻击者通过引诱用户点击伪造的链接或在受害者身上植入恶意代码等方式
// 使得用户在登录状态下发起未经授权的请求，从而执行攻击者所期望的操作。

// 防御
// 1、验证码
// 2、验证HTTP Referer头
// 3、实现同步和异步Token机制
// 4、HTTPonly