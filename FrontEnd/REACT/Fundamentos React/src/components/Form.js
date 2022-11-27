import { useState } from 'react'
export default function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`O usuário ${name}  foi cadastrado com a senha ${password}`);
    ;
  }
  const [name, stName] = useState()
  const [password, setPassword] = useState()
  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor='name '> Nome : </label>
          <input type="text" id="name" name="name" placeholder='Digite seu nome'
            onChange={(e) => stName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="submit">Senha:</label>
          <input type="password"
            id="password"
            name="password"
            placeholder='Digite sua senha'
            onChange={(e) => setPassword(e.tage.value)} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>

      </form>
    </>
  )

}