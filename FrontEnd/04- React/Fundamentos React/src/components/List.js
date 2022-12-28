import Item from './Item'
export default function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <li> <Item marca="Buggati" ano_lancamento={1985} /></li>
        <li><Item marca="Ferrari"  ano_lancamento={1985}/></li>
      </ul>
    </>
  )
}