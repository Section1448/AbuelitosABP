import './Title.css'

function Title({title,name}) {
  return (
    <div className="Title">
    <h1>{title}</h1>
    <h2>{name}</h2>
    <p align="center"><img src="../../FERNANDO.jpg" alt='No se pudo cargar la imagen' title='Este soy yo hace 3 años'
    width={100}></img></p>
    </div>
  );
}

export default Title;