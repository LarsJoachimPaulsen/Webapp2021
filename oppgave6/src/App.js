import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Button from './Components/Button';
import Todos from './Components/Todos';

function App() {

  const addToDo = () => {
    alert("hei");
  }

  return (
    <Wrapper>
        <Nav userName="user" />
        <Form />
        <Button text="Add" clickHandler={addToDo} />
        <Todos/>
    </Wrapper>
  );
}

export default App;
