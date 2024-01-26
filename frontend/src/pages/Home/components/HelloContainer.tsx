import * as S from "../Styles.ts"


export default function HelloContainer() {
  return (
    <div className="">
        <div className="flex flex-col-reverse md:flex-row ">
            <img src="/cachorro.png" alt="cachorro petconnect" 
            className=""/>

            <S.TextHello className="">
            Bem-vindo à nossa comunidade dedicada a conectar amantes de animais! Aqui, criamos uma rede social exclusiva para você e seus companheiros peludos. Junte-se a nós para compartilhar momentos especiais, encontrar novos amigos peludos e até mesmo ajudar a localizar e dar um lar amoroso a cachorros perdidos. Seja parte da nossa missão de tornar o mundo um lugar melhor para todos os animais.
            </S.TextHello>
        </div>
    </div>
  )
}
