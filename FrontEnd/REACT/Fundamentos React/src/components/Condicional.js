import { useState } from 'react';

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
  }
  return (
    <div>
      <h2> cadastre seu email:</h2>
      <form type="email" placeholder="Digite seu email..." onChange ={(e)=> setEmail(e.target.value)}>

        <button type="submit" onClick={enviarEmail}>Enviar-email</button>
        {userEmail}
      </form>
    </div>
  )

}
export default Condicional();
