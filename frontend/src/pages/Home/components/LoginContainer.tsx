import * as S from "../Styles.ts"
import Form from "./Form.tsx"


export default function LoginContainer() {
  return (
    <div className="flex justify-center pt-10">
        <S.ContainerLogin>
          <Form />
           
        </S.ContainerLogin>
    </div>
  )
}
