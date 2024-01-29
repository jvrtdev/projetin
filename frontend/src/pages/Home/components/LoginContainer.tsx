import { useState } from "react"
import * as S from "../Styles.ts"
import Cadastro from "./Cadastro.tsx"
import Login from "./Login.tsx"


export default function LoginContainer() {
  const [loginOrSign, setLoginOrSign ] = useState<boolean>(false)

  function SetLogin() {
    setLoginOrSign(true)
  }
  function SetSign() {
    setLoginOrSign(false)
  }

  return (
    <div className="flex justify-center pt-10 flex-col items-center">
          {/* <S.ButtonSwitch onClick={() => {
            if(loginOrSign == false ){
              setLoginOrSign(true)
            }else{
              setLoginOrSign(false)
            }
          }}>
            {loginOrSign == false ? "Login" : "Cadastro"}
          </S.ButtonSwitch> */}
          <S.SwitchContainer>
            <S.SwitchButtonLogin isFalse={loginOrSign}
            onClick={SetLogin}>
              Login
            </S.SwitchButtonLogin>

            <S.SwitchButtonSign isFalse={loginOrSign}
            onClick={SetSign}
            >
              Cadastro
            </S.SwitchButtonSign>
          </S.SwitchContainer>
        <S.ContainerLogin>
          {loginOrSign == false ? <Cadastro /> : <Login /> }
          
        </S.ContainerLogin>
        
    </div>
  )
}
