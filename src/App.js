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


function App() {
  const todos = useSelector((state) => state.todos.value);
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
                { todos.map((tarea)=>(
                  <Item name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}/>
                ))}
              </div>
            </Row>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
