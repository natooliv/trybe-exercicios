import { useState } from 'react';

function Condicional() {
  function enviarEmail(e) {
    e.preventDefauly()
  }
  return (
    <div>
      <h2> cadastre seu email:</h2>
      <form type="email" placeholder="Digite seu email...">

        <button  type="submit"onClick={enviarEmail}>Enviar-email</button>
      </form>
    </div>
  )

}
export default Condicional();
