import * as S from "../Styles.ts"
import axios from "axios";
//react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//yup
import { object, string } from "yup";
// icons and useState
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
interface SchemaType{
    email: string;
    password:string;

}

const schema = object<SchemaType>({
    email: string()
    .required("Campo obrigatório")
    .min(3, "Você precisa inserir no minimo 3 caracteres"), 
    password: string()
    .required("Campo obrigatório")
    .min(6, "Você precisa inserir no minimo 6 caracteres")
    .max(10, "Sua senha não pode ter mais que 10 caracteres")
})

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    interface FormInput{
        email: string;
        password: string;
    }
    const { register, handleSubmit: onSubmit, watch, formState: {errors} } = useForm<FormInput>({ resolver: yupResolver(schema)})

    const submitApi = async (data: any) => {
        try{
            const response = await axios.post("http://localhost:3000/login", data);
            console.log(response.data)
            alert("Usuario válido")
        }
        catch(error){
            console.error(error)
            alert("Email ou Senha incorretos")
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    

    return (
        <S.FormArea onSubmit={onSubmit(submitApi)}>
            <S.TitleForm>Login</S.TitleForm>

            <S.TextHello>Email</S.TextHello>
            
            <S.InputLogin 
            type="email"
            {...register("email")}
            />
            <S.Validation>{errors?.email?.message}</S.Validation>
            <S.TextHello>Senha</S.TextHello>
            
            <div style={{ position: 'relative' }}>
        <S.InputLogin
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-75%)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
        </button>
      </div>


            <S.Validation>{errors?.password?.message}</S.Validation>

            <S.ButtonLogin type="submit" disabled={!watch("email") || !watch("password")}>Entrar</S.ButtonLogin>
        </S.FormArea>
    )
}
