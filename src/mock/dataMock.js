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
    'token|1': "TOKEN information",
    'info|1': ['student', 'teacher'],
    'result': true,
    // total: 1,
    // 'min|1': [{'money|500-1000':700}] ,
    // 'middle|4': [{ 'money|1000-3000': 3000 }],
    // 'max|1': [{'money|300-700':700}]
    // id: '@guid',
    // name: '@cname',
    // 'age|20-30': 23,
    // 'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
  },
}
let moneyList = {
  data: {
    total: 1,
    'min|1': [{ 'money|200-300': 200 }],
    'middle|4': [{ 'money|1000-3000': 3000 }],
    'max|1': [{ 'money|300-500': 300 }]
  }
}

let subjectList = {
  data: {
    // total: 5,
    // 'subject':[],
    'subject':[{'value|1':'English','label':'choose'},{'value|1':'Chinese','label':'choose'},{'value|1':'Math','label':'choose'}],
    // 'subject|2': [{ 'value|1': ['English', 'Chinese', 'Math', 'Science', 'Computer', 'Social'], 'label': 'choose' }],
    // 'subjects':['English','Chinese','Math','Science','Computer','Social']
  }

}

let userList = {
  data: {
    'id|190110001-200399111': 190110001, name: '@cname', 'info|1': ['teacher'],
  }
}

let questionList = {
  data: {
    'question|5': [{ 'info': "1+1=?", 'answer': { 'A': 1, 'B': 2, 'C': 3, 'D': 4, }, 'id|+1': 0 }],
  }
}


let superviseList = {
  data: {

    'info|6': [{ 'id|190110001-200399111': 190110001, name: '@cname', 'left-time': '@DATETIME("HH:mm:ss")', 'status|1': ["Not entered", "Entered", "Finished"] }],

    // 'question|5': [{ 'info': "1+1=?", 'answer': { 'A': 1,'B':2,'C':3,'D':4,},'id|+1':0}],
  }
}

let gradeList = {
  data: {

    'info|6': [{ 'id|190110001-200399111': 190110001, name: '@cname', 'Math|60-100': 70, 'Chinese|60-100': 70, 'English|60-100': 70 }],

    // 'question|5': [{ 'info': "1+1=?", 'answer': { 'A': 1,'B':2,'C':3,'D':4,},'id|+1':0}],
  }
}

let studentList = {
  data: {

    'info|6': [{ 'id|190110001-200399111': 190110001, name: '@cname', }],

    // 'question|5': [{ 'info': "1+1=?", 'answer': { 'A': 1,'B':2,'C':3,'D':4,},'id|+1':0}],
  }
}

let answerList = {
  data: {

    'info|6': [{ 'id|190110001-200399111': 190110001, name: '@cname', 'answer|6': [{ 'serialNumber|+1': 6, 'answer|1': 'answer describtion', 'question|1': 'question describtion','grade|0':0 }] }],

    // 'question|5': [{ 'info': "1+1=?", 'answer': { 'A': 1,'B':2,'C':3,'D':4,},'id|+1':0}],
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
  'get|/moneyMock': moneyList,
  'post|/userInfo': userList,

  'get|/student/getSubjects': subjectList,
  'get|/teacher/getSubjects': subjectList,
  'post|/student/getQuestions': questionList,
  'post|/teacher/supervise': superviseList,
  'post|/teacher/getGrade': gradeList,
  'post|/teacher/getAnswer': answerList,
  'post|/teacher/studentlist': studentList,




}
