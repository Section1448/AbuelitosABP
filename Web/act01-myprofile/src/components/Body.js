import Button from 'react-bootstrap/Button';
import './Body.css'

function Body() {

const handleClick = () => {
    alert("Your message has been sent");
}

  return (
    <div className="Body">
    <section>
<h2 className='h2b'>Summary</h2>
<p>Im <b>Fernando Burgos</b> from Mexico, i am studying <i>Computer Science</i> at Tecnologico de monterrey,<br></br> i like learning new things and programming, im searching for a backend job but i can also make some things in the frontend</p>
<hr></hr>
</section>
<section>
<h2 className='h2b'>Formation</h2>
<ul>
    <li><b>Computer Science</b> at <i>Tecnologico de Monterrey</i> | 2021 - 2025</li>
    <li><b>My own Netflix</b> | i made a project where i basically programmed a system which would search and filter movies, series, or chapter of the series using classes in C++</li>
    <li><b>My first web page</b> | i made a customized a web page hosted in my computer and this is the result</li>
</ul>
</section>
<hr></hr>
<section>
<h2 className='h2b'>Skills</h2>
<table border="2" align='center'>
  <tr>
      <th>technologies</th>
      <td>C++</td>
      <td>Python</td>
      <td>HTML</td>
     
  </tr>
  <tr>
      <th>soft skills</th>
      <td>Responsible</td>
      <td>honest</td>
      <td>punctual</td>
  </tr>
</table>
</section>
<section>
    <h2 className='h2b'>Contact Form</h2>
    <form>
  <label for="name">Name: </label>
  <input placeholder="Name" id="name" type="text" /><br></br>
  <label for="email">Email: </label>
  <input placeholder="Email" id="email" type="email" /><br></br>
  <label for="mensaje">Mensaje: </label>
  <textarea id="mensaje" placeholder="message"></textarea><br></br>
  <Button variant="secondary" onClick={handleClick}>SEND</Button>
</form>
</section>
<hr></hr>
<footer>
  <h2 className='h2b'>Contacts</h2>
  <a className='ab' href="https://github.com/FernandoBurgos" rel='noreferrer' target="_blank" color='black'>Github</a>
  <a className='ab' href="https://www.linkedin.com/in/fernando-burgos-s%C3%A1nchez-565717251" rel='noreferrer' target="_blank">LinkedIn</a>
  <p align="center"><i>Copyright &copy; Fernando Burgos</i></p>
</footer>
    </div>
  );
}

export default Body;