//引入mockjs
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './default.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});





// //使用mockjs模拟数据
// Mock.mock('/\/api\/msdk\/proxy\/query_common_credit/', {
//     "ret":0,
//     "data":
//       {
//         "mtime": "@datetime",//随机生成日期时间
//         "score|1-800": 800,//随机生成1-800的数字
//         "rank|1-100":  100,//随机生成1-100的数字
//         "stars|1-5": 5,//随机生成1-5的数字
//         "nickname": "@cname",//随机生成中文名字
//       }
// //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
// });