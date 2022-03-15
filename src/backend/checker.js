const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./fetch')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Plagiarism checker' })
  });

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

app.get('/documents', db.getDocs)
app.get('/documents/:id', db.getDocById)
app.post('/documents', db.createDoc)
app.put('/documents/:id', db.updateDoc)
app.delete('/documents/:id', db.deleteDoc)

module.exports = app;