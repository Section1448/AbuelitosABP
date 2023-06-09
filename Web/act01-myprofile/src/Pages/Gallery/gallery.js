import Cards from '../../components/Cards';
import { CardGroup } from 'react-bootstrap';

function Gallery() {
    return (
        <div className='CardGroups'>
            <h1>Proyectos</h1>
            <CardGroup>
            <Cards 
            imgSrc="../../CV.png"
            title = "Perfil digital"
            text = "Curriculum Vitae propio en una pagina web"
            link = "/perfil"
            />
            <Cards 
            imgSrc="../../Card2.png"
            title = "Contador"
            text = "botones que incrementan y disminuyen un contador en pantalla"
            link = "/contador"
            />
            <Cards 
            imgSrc="../../Card3.jpg"
            title = "Proyecto3"
            text = "Aqui va un resumen del proyecto 3"
            link = "/limite"
            />
            </CardGroup>
            <CardGroup>
            <Cards 
            imgSrc="../../Card1.jpg"
            title = "Proyecto4"
            text = "Aqui va un resumen del proyecto 4"
            link = "/limite"
            />
            <Cards 
            imgSrc="../../Card2.png"
            title = "Proyecto5"
            text = "Aqui va un resumen del proyecto 5"
            link = "/limite"
            />
            <Cards 
            imgSrc="../../Card3.jpg"
            title = "Proyecto6"
            text = "Aqui va un resumen del proyecto 6"
            link = "/limite"
            />
            </CardGroup>
        </div>
    )
}

export default Gallery;