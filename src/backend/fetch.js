const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'documents',
  password: 'admin',
  port: 5432
}
);

const getDocs = (request, response) => {
  pool.query('SELECT * FROM documents', (error, results) => {
    if (error) {
      throw error;
      console.log(`erros is ${error}`);
    }
    response.status(200).json(results.rows)
  })

}

const getDocById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM documents WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDoc = (request, response) => {
  const { name, descript, author, file } = request.body

  pool.query('INSERT INTO documents (Name, Description, Author, File) VALUES ($1, $2, $3, $4)', [name, descript, author, file], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send().json('Document added : ${results.insertId}');
  })
}

const updateDoc = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE documents SET Name = $1, Description = $2, Author = $3, File = $4 WHERE id = $5 RETURNING *',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      } 
      if (typeof results.rows == 'undefined') {
      	response.status(404).send(`Resource not found`);
      } else if (Array.isArray(results.rows) && results.rows.length < 1) {
      	response.status(404).send(`Document not found`);
      } else {
  	 	  response.status(200).send(`Document modified with id: ${results.rows[0].id}`).json('Document updated');
      }
     
    }
  )
}

const deleteDoc = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM documents WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Document deleted with ID: ${id}`)
  })
}

module.exports = {
  getDocs,
  getDocById,
  createDoc,
  updateDoc,
  deleteDoc,
}