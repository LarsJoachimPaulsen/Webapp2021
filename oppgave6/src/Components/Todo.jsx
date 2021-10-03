import Button from "./Button"
import Title from "./Title"

const Todo = ( {clickHandler, index, content } ) => {
return(
    <div class="toDoCard">
        <Title title="ToDoTitle"/>
        <p> 
            {content} 
        </p>
        <Button text="complete" clickHandler={()=>clickHandler({index})} />
    </div>    
    )
}

export default Todo; 