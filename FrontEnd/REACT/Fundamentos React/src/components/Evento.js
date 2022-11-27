import Button from './Button';

export function Evento() {

  function meuEvento() {
    console.log(`opa, fui ativado!`);
  }

  function segundoEvento(){
    console.log('Ativando segundo');
  }

  return (
    <>
      <p> Clique para disparar um evento</p>
      <Button event={meuEvento()} text="Primeiro Evento" />
      <Button event={segundoEvento()} text="Segundo Evento" />
    </>
  )

}