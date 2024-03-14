import conexao from "../database/connection.js";




class PostController{
    index(req, res) {
        const sql = "SELECT * FROM posts;"
        conexao.query(sql, (error, result) => {
            if(error) {
                console.log(error);
                res.status(404).json({'erro': `${error}`})
            }
            else{
                res.status(200).json(result)
            }
        })
    }
    show(req, res) {
        const id = req.params.email;
        const sql = "SELECT * FROM posts WHERE userEmail=?;";
        conexao.query(sql, id, (error, result) => {
            if(error) {
                res.status(404).json({error})
            }
            else {
                res.status(200).json(result)
            }
        })
    }

    store(req, res) {
        const data = {
            description: req.body.description,
            img: req.body.img,
            userEmail: req.body.userEmail,
            createdAt: req.body.createdAt
        }
        const sql = "INSERT INTO posts SET ?;";
        conexao.query(sql, data, (error, result) => {
            if(error){
                console.log(error);
                res.status(404).json({'erro': `${error}`})
            }
            else{
                res.status(200).json(result)
            }
        })
    }

}
export default new PostController