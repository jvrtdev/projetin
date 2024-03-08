


export default function HelloContainer() {
  return (
    <div className="">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        <img src="/cachorro.png" alt="cachorro petconnect" className="w-full max-w-[400px]" />
            <div className="mt-5 md:mt-20 p-2 flex flex-col flex-wrap">
              <h1 className="text-5xl md:text-6xl mb-5 text-laranja font-bold text-center md:text-start">PetConnect</h1>
              <p className="text-verde font-medium mb-2 text-xl md:text-1xl">Bem-vindo à nossa comunidade dedicada a conectar amantes de animais! Aqui, criamos uma rede social exclusiva para você e seus companheiros peludos.</p>
              <p className="text-verde font-medium mb-2 text-xl md:text-1xl">Junte-se a nós para compartilhar momentos especiais, encontrar novos amigos peludos e até mesmo ajudar a localizar e dar um lar amoroso a cachorros perdidos. Seja parte da nossa missão de tornar o mundo um lugar melhor para todos os animais.</p>
            </div>
        </div>
    </div>
  )
}
