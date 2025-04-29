import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu/Menu';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
