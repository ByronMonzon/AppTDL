import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import { useDispatch } from 'react-redux';
import { useRef } from "react";
import {
  addTodo
} from '../../reducers/todoSlice';


function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value
    }))
  }

  return (
    <div className='space'>
         <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="" ref={inputRefName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" placeholder="name@example.com" ref={inputRefDueDate}/>
        </Form.Group>
        <Button variant="info" onClick={addItem}>Add Task</Button>
      </Form>
    </div>
   
    );
  }
  
  export default Formulario;