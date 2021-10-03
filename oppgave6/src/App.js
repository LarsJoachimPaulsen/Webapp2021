
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

  const removeToDo = (index) => {
    alert(`completed todo ${index.index}`)
  }

  return (
    <Wrapper>
        <Nav userName="user" />
        <Form />
        <Button text="Add" clickHandler={addToDo} />
        <Todos clickHandler={removeToDo}/>
    </Wrapper>
  );
}

export default App;
