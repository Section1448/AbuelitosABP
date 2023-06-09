import { Container, Row, Col } from 'react-bootstrap';
import classesData from '../../data/classesDta';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react';
import NewCourse from '../addCourse/addcourse';

function Classes(){

const [classes, setClasses] = useState(classesData);
const [modalShow, setModalShow] = React.useState(false);
const [modalMode, setModalMode] = useState('add'); // add, edit
const [course, setCourse] = useState({
  id: '',
  name: '',
  teacher: '',
  classroom: ''
});

const handleAdd = () => {
  setCourse({
    id: '',
    name: '',
    teacher: '',
    classroom: ''
  });
  setModalMode('add');
  setModalShow(true)};

const handleClose = () => setModalShow(false);

const handleDelete = (id) => {
  console.log(id);
  setClasses ((prevClasses) => {
    return prevClasses.filter((course) => course.id !== id)});
}

const handleEdit = (index) => {
  console.log(classes[index]);
  // setTimeout(() => {setCourse(classes[index])}, 2000);
  setCourse(classes[index]);
  setModalMode('edit');
  setModalShow(true);
}

const addEditCourse = (course) => {
  if (modalMode === 'add') {
    setClasses((prevClasses) => {
      return [...prevClasses, course]
    });
  }
  else {
    setClasses((prevClasses) => {
      return prevClasses.map((prevCourse) => {
        if (prevCourse.id === course.id) {
          return course;
        }
        else {
          return prevCourse;
        }
      })
    });
  }
}

    return(
        <>
            <h1>Classes</h1>

    <Container>
      <Row>
        <Col>course</Col>
        <Col>Profesor</Col>
        <Col>Salon</Col>
        <Col><Button variant='success' onClick={handleAdd}>Agregar</Button></Col>
      </Row>
      {/*Si no hay classes, mostrar mensaje de que no hay clases*/}
      {classes.length === 0 && 
      <Row>
        <Col>No hay clases</Col>
      </Row>}
      {classes.map((course, index) => (
        <Row key={course.id}>
        <Col>{course.name}</Col>
        <Col>{course.teacher}</Col>
        <Col>{course.classroom}</Col>
        <Col><Button variant="primary" size='sm' onClick={() => {handleEdit(index)}}>Editar</Button>
        <Button variant="danger" size='sm' onClick={() => {handleDelete(course.id)}}>Borrar</Button></Col>
      </Row>
      ))}
    </Container>
    <NewCourse show={modalShow} onHide={handleClose} course={course} modalMode={modalMode} handleCourse={addEditCourse} />
        </>
    );
}

export default Classes;