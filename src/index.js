const axios = require('axios')
const fs = require('fs')

const _dirname = './dist' // 输出目录
const Cookie = '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMxLCJpYXQiOjE1NTc3NDc2MDgsImV4cCI6MTU1ODM1MjQwOH0.RyQd1Oc09-XAlr74HEbTko4mWtdueD9O6hd8mXPbVjo; _yapi_uid=31'

let exportApiArr = []

const headerCode = `import { AxiosRequestConfig } from 'axios'\nimport instance from './instance'\n`

fs.truncate(_dirname + '/api.ts', 0, () => {
  console.log('清空文件成功')
})

fs.writeFile(_dirname + '/api.ts', headerCode, () => {
  console.log('写入文件成功')
})

listMenu()

function listMenu () {
  axios.get('http://172.27.0.5:3000/api/interface/list_menu?project_id=95', {
    headers: { Cookie }
  }).then(res => {
    if (res.data.errcode === 0) {
      let code = ''
      res.data.data.map(item => {
        let desc = item.name
        console.log(desc)
        item.list.map(api => {
          let apiName = changeCase(api.path) + '_' + api.method.toLowerCase()
          exportApiArr.push(apiName)
          code += `\n/** ${desc} ${api.title.trim()} */\nfunction ${apiName} (opts?: AxiosRequestConfig) {\n  return instance({\n    method: '${api.method.toLowerCase()}',\n    url: '/api/v4/manager${api.path}',\n    ...opts\n  })\n}\n`
        })
      })
      fs.appendFile(_dirname + '/api.ts', code, () => {
        console.log('WRITE FILE SUCCESS')
        appendExportCode()
      })
    }
  })
}

function changeCase (str) {
  let res = str.replace(/\/|-/g, '_');
  if (res.startsWith('_')) {
    return res.replace(/_/, '')
  }
  return res
}

function appendExportCode () {
  let api = ''
  let length = exportApiArr.length
  exportApiArr.map((name, index) => {
    if (index < length - 1) {
      api += name + ',\n  '
    } else {
      api += name
    }
  })
  fs.appendFile(_dirname + '/api.ts', `\nexport {\n  ${api}\n}`, () => {
    console.log('THE END!')
  })
}