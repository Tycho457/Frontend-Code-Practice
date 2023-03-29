// （Cross-Site Scripting）攻击
// 1、反射型XSS：将恶意脚本作为URL参数传递给web应用程序
// 2、存储型XSS：将恶意脚本存储在web服务器

// 防御
// 1、输入验证
function validateInput(inpputData) {
    // 过滤所有HTML标签和JS代码
    return inputData.replace(/<.*?>/g, '').replace(/<script.*?\/script>/g, '');
}

// 2、输出转义
function escapeHTML(htmlStr) {
    return htmlStr.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;')
                  .replace(/\//g, '&#x2f;');
  }

// 3、HTTPOnly Cookie
// 防止js访问cookie
document.cookie = 'sessionID=123456789; HttpOnly;';
