const axios = require('axios')
const fs = require('fs')
const config = require('../config')

let exportApiArr = []

listMenu()

function listMenu () {
  axios.get(config.requestUrl, {
    headers: {
      Cookie: config.cookie
    }
  }).then(res => {
    if (res.data.errcode === 0) {
      appendApiCode(res.data.data)
    } else {
      console.log(res.data)
    }
  })
}

async function appendApiCode (data) {
  await appendImportCode()
  let code = ''
  data.map(item => {
    let desc = item.name
    console.log(desc)
    item.list.map(api => {
      let apiName = changeCase(api.path) + '_' + api.method.toLowerCase()
      exportApiArr.push(apiName)
      code += `\n/** ${desc} ${api.title.trim()} */\nfunction ${apiName} (opts?: AxiosRequestConfig) {\n  return instance({\n    method: '${api.method.toLowerCase()}',\n    url: '/api/v4/manager${api.path}',\n    ...opts\n  })\n}\n`
    })
  })
  await fs.appendFile(config.dirname + '/' + config.fileName, code, () => {
    console.log('WRITE FILE SUCCESS')
    appendExportCode()
  })
}

function changeCase (str) {
  let res = str.replace(/\/|-/g, '_');
  if (res.startsWith('_')) {
    return res.replace(/_/, '')
  }
  return res
}

function appendImportCode () {
  const headerCode = `import { AxiosRequestConfig } from 'axios'\nimport instance from './instance'\n`

  const exists = fs.existsSync(config.dirname + '/' + config.fileName)
  if (exists) {
    fs.truncateSync(config.dirname + '/' + config.fileName, 0)
    console.log('清除文件成功')
  } else {
    fs.mkdirSync(config.dirname)
    console.log('创建目录成功')
  }
  fs.writeFileSync(config.dirname + '/' + config.fileName, headerCode)
  console.log('写入文件成功')
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
  fs.appendFile(config.dirname + '/' + config.fileName, `\nexport {\n  ${api}\n}\n`, () => {
    console.log('THE END!')
  })
}