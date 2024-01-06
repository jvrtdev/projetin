import { useState } from "react"


export default function App() {


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const data = {
      email: email,
      password: password
    }
  return (
    <div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border"
          />
          <label htmlFor="password">Senha</label>
          <input type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
          />

          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}


