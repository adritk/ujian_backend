const connection = require('../database/index')

module.exports = {
    getCategory : (req,res) => {
        console.log(req.query)
        const query = `SELECT * FROM view_category
        `
        connection.query(query, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    createCategory : (req,res) => {
        console.log(req.body)

        const query = `INSERT INTO categories SET ?`
        connection.query(query, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    deleteCategory : (req,res) => {
        console.log(req.params.id)

        const query = `DELETE FROM categories WHERE id = ${connection.escape(req.params.id)}`
        connection.query(query, (err, results) => {
            if(err) {
                return res.status(500).send({
                    message: "gabisa hapus yang punya anak",
                    err : err
                })
            }

            res.status(200).send(results)
        })
    },

    editCategory : (req,res) => {
        console.log(req.params.id)
        console.log(req.body)

        const query = `UPDATE categories SET ? WHERE id = ${connection.escape(req.params.id)}`
        connection.query(query, req.body, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    }
}