import { Mock } from "mockjs";

let demoList = [{
  id: 1,
  name: 'zs',
  age: '23',
  job: '前端工程师'
}, {
  id: 2,
  name: 'ww',
  age: '24',
  job: '后端工程师'
}]


let loginResult = {
  data: {
    total: 1,
    'token|1': [{ 'money|500-1000': 700 }],
    'info|1' : ['student','teacher'],
    // total: 1,
    // 'min|1': [{'money|500-1000':700}] ,
    // 'middle|4': [{ 'money|1000-3000': 3000 }],
    // 'max|1': [{'money|300-700':700}]
    // id: '@guid',
    // name: '@cname',
    // 'age|20-30': 23,
    // 'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
     'result':true,
  },
  // status: 200,
 
}
let moneyList = {
  data: {
    total: 1,
    'min|1': [{'money|200-300':200}] ,
    'middle|4': [{ 'money|1000-3000': 3000 }],
    'max|1': [{'money|300-500':300}]
  }
}






export default {
  'get|/api': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  },


  'post|/login': loginResult,
  'get|/moneyMock': moneyList

}
