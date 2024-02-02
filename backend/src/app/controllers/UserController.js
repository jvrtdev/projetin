import conexao from "../database/connection.js";


class UserController {
    index(req, res) {
        const sql = "SELECT * FROM usuarios;";
        conexao.query(sql, (error, result) => {
            if(error){
                console.log(error);
                res.status(404).json({'erro': `${error}`})
            }else{
                res.status(200).json(result)
            }
        })
    }

    show(req, res) {
        const email = req.params.email;
        const sql = "SELECT * FROM usuarios WHERE email=?";
        conexao.query(sql, email, (error, result) => {
            if(error){
                console.log(error);
                res.status(404).json({'error': `${error}`})
            }else{
                res.status(200).json(result)
                if(result == req.body){
                    res.status(200).json('User true')
                }
            }
        })

    }
    login(req, res) {
        const {email, password} = req.body;
        const sql = "SELECT * FROM usuarios WHERE email=? AND password=?";
        conexao.query(sql, [email, password], (error, result) => {
            if(error){
                console.log(error);
                res.status(404).json({'error': `${error}`})
            }else{
                if(result != ''){
                    res.status(200).json({
                    "UserData": req.body,
                    "DbData": result
                    })
                }else{
                    res.status(401).json({"Usuario não encontrado":"Verifique o email ou a Senha"})
                }
            }
        })

    }

    store(req, res) {
        const data = req.body;
        const sql = "INSERT INTO usuarios SET ?;";
        conexao.query(sql, data, (error, result) => {
            if(error){
                console.log(error)
                res.status(404).json({'error': `${error}`})
            }else{
                res.status(200).json(result)
            }
        })

    }

    update(req, res) {
        const email = req.params.email;
        const data = req.body;
        const sql = "UPDATE usuarios SET ? WHERE email=?;";
        conexao.query(sql, [data, email], (error, result) => {
            if(error){
                res.status(404).json({'error': error})
            }
            else{
                res.status(200).json(result)
            }

        })
    }

    delete(req, res) {
        const email = req.params.email;
        const sql = "DELETE FROM usuarios WHERE email=?;";
        conexao.query(sql, email, (error, result ) => {
            if (error){
                res.status(404).json({'error': error})
            }
            else{
                res.status(200).json(result)
            }
        })
    }


}

export default new UserController