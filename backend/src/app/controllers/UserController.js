import conexao from "../database/connection.js";
import bcrypt from 'bcrypt';


    
//falta implementar isso jogando a senha para o banco de dados no metodo store

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
    async login(req, res) {
        const {email, password} = req.body;
        const sql = "SELECT * FROM usuarios WHERE email=?;";
                conexao.query(sql, email, async (error, result) => {
                    if(error){
                        console.log(error);
                        res.status(404).json({'error': `${error}`})
                    }else{
                       await bcrypt.compare(password, result.password)
                        .then((match) => {
                            if(match){
                                res.status(200).json({
                                "UserData": req.body,
                                "DbData": result,
                                "Senha correta" : "true"
                                })
                            }else{
                                res.status(401).json({"Usuario não encontrado": error })
                            }
                        })
                        .catch((error) => {
                            res.status(400).send(result.password)
                        })
                    }
                })
    }

    store(req, res) {
        const data = {
            email: req.body.email,
            password: CreateHash(req.body.password)
        };
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