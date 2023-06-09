import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './addcourse.css'

function NewCourse({show, onHide, course, modalMode, handleCourse}){
    const [id, setID] = useState(course.id);
    const [name, setName] = useState(course.name);
    const [teacher, setTeacher] = useState(course.teacher);
    const [classroom, setClassroom] = useState(course.classroom);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {id: id, name: name, teacher: teacher, classroom: classroom};
        handleCourse(newCourse);
        onHide();
    }

    return(
    <div>
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {modalMode === 'add' ? 'Agregar un nuevo curso' : 'Editar un curso'}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Teclea tu nombre" value={name} onChange={(event) => {setName(event.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="ID">
          <Form.Label>class ID</Form.Label>
          <Form.Control type="text" placeholder="Teclea el numero de clase" value={id} onChange={(event) => {setID(event.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your class id with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Teacher">
          <Form.Label>Teacher name</Form.Label>
          <Form.Control type="text" placeholder="Teclea el nombre del profesor" value={teacher} onChange={(event) => {setTeacher(event.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your teacher name with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Classroom">
          <Form.Label>Classroom number</Form.Label>
          <Form.Control type="text" placeholder="Teclea el numero del salon" value={classroom} onChange={(event) => {setClassroom(event.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your classroom with anyone else.
          </Form.Text>
        </Form.Group>
        <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Cerrar</Button>
        <Button variant="success" type="submit">
        {modalMode === 'add' ? 'Agregar' : 'Editar'}
        </Button>
        </Modal.Footer>
      </Form>
        </Modal.Body>
      </Modal>
    </div>
    )
}

export default NewCourse;