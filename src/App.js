import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu/Menu';
import Item from './Components/Item/Item';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import FormTaskAndGoal from './Components/Formulario/Formulario';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  initAddTodo,
} from './reducers/todoSlice'


function App() {
  const todos = useSelector((state) => state.todos.value);
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();
  function initFetch(){
    fetch("http://localhost:3001/tasks/getTasks",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "123456"
            }
            }).then((response)=>
              response.json()
            ).then((response)=>{
              response.map((task)=>{
                dispatch(initAddTodo(task));
              })
            }).catch(err=>(
                console.log(err)
            ))
  }
useEffect(()=>{
  initFetch();
},[])
  return (
    <div className="App">
      <Menu></Menu>

      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'><FormTaskAndGoal/></Col>
          <Col xs={0} sm={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddingMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                 {option==='tasks' &&
                todos.map((todo, index)=>(
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} id={todo._id}/>
   
                 ))
            }   
              </div>
            </Row>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
