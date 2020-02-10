const connection = require('../database/index')

module.exports = {
    getCategoryLeaf : (req,res) => {
        console.log(req.query)
        const query = `select p.id, p.nama, c.category 
                        from products p
                        join productcat pc 
                        on p.id = pc.productId
                        join categories c
                        on c.id = pc.categoryId;`
        connection.query(query, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    deleteCategoryLeaf : (req,res) => {
        const query = `DELETE FROM productcat WHERE productId=${connection.escape(req.params.id)}`
        connection.query(query, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }

                res.status(200).send(results)
        })
    }   
}