const express = require('express')
const app = express()
const port = 3000

// middleware
app.use((req, res, next) => {
  let nowDate = new Date()
  let date = nowDate.toISOString().slice(0, 10)
  let time = nowDate.toISOString().slice(11, 19)
  let message = `${date} ${time} | ${req.method} ${req.url}`
  res.locals = { time: nowDate, message: message }

  res.on('finish', () => {
    let dataSet = res.locals
    console.log(`${dataSet.message} | total time: ${(new Date() - dataSet.time)}ms`)
  })
  next()
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})