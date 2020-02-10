const connection = require('../database/index')

module.exports = {
    getProductById : (req,res) => {
        
        const query = `SELECT * FROM products WHERE id=${connection.escape(req.params.id)}`
        connection.query(query, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }

                res.status(200).send(results[0])
        })
    },

    getAllProduct: (req,res) => {
        const query = `SELECT * FROM products`
        connection.query(query, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }

                res.status(200).send(results)
        })
    },

    createProduct : (req,res) => {
        // console.log(req.body)
        const query = `INSERT INTO products SET ?`
        connection.query(query, req.body, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }

                res.status(200).send(results)
        })
    },

    deleteProduct : (req,res) => {
        const query = `DELETE FROM products WHERE id=${connection.escape(req.params.id)}`
        connection.query(query, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }

                res.status(200).send(results)
        })
    },

    editProduct : (req,res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        const query = `UPDATE products SET ? WHERE id=${connection.escape(req.params.id)}`
        connection.query(query, req.body, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }

                res.status(200).send(results)
        })
    }
}