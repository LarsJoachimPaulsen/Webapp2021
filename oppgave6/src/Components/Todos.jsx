import Todo from './Todo';
import Title from './Title';

const numbers = [0, 1, 2, 3]
const Todos = ({ clickHandler }) => {

    return (
        <>
        <Title title = "My todos"/>
        <div id="toDo">
            {numbers.map((value, index) =>{
              return <Todo key={index} clickHandler = {clickHandler} index={index} content = {value} />
            }) }
        </div>
        </>
    );
}

export default Todos; 