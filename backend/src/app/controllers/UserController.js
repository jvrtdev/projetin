import conexao from "../database/connection.js";
import bcrypt from 'bcrypt';

//function create hashPassword
    const CreateHash = (password) => {
        const saltRounds = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, saltRounds)
        return hash 
    }
   
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
    try{
        const {email, password} = req.body;
        const sql = "SELECT * FROM usuarios WHERE email=?;";
            conexao.query(sql, email, async (error, result) => {
                if(error){
                    console.log(error);
                    res.status(404).json({'error': `${error}`})
                }
                if(result.length > 0){
                    const hashFromDb = result[0].password;

                    const passwordMatch = await bcrypt.compare(password, hashFromDb)
                    if(passwordMatch){
                        res.status(200).json({"Status" : "Login bem-sucedido"})
                    }else{
                        res.status(401).json({"Status" : "Senha incorreta"})
                    }

                }else{
                    res.status(200).json({"Status" : "Usuário não encontrado"})
                }
            })
        }
        catch(error){
            res.status(500).json({"Erro": "Erro interno no servidor"})
        }
    }

    store(req, res) {
        const data = {
            email: req.body.email,
            password: CreateHash(req.body.password),
            username: req.body.username,
            name: req.body.name,
            coverImg: req.body.coverImg,
            profileImg: req.body.profileImg,
            city: req.body.city,
            website: req.body.website
        };
        const { email, password } = req.body
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