import { useState } from "react"
import * as S from "../Styles.ts"
import axios from "axios";


export default function Form() {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const formData = {
        email: email,
        password: password
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/user', formData);
            console.log("Resposta da API", response.data)
        }
        catch(error){
            console.error('Deu ruim menor', error)
        }
    }



    // axios.post('http://localhost:3000/user', JSON.stringify(formData))
    // .then((response) => console.log(response) )
    // .catch((error) => console.error('Deu ruim menor', error))

        return (
        <S.FormArea onSubmit={handleSubmit}>
        <S.TitleForm>Login</S.TitleForm>

        <S.TextHello>Email</S.TextHello>
        <S.InputLogin
        placeholder="Digite seu usuario"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <S.TextHello>Senha</S.TextHello>
        <S.InputLogin
        placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <S.ButtonLogin
        type="submit"
        >Entrar</S.ButtonLogin>
    </S.FormArea>
    )
}
