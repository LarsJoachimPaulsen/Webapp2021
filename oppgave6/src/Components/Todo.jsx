import Button from "./Button"
import Title from "./Title"

const Todo = () => {
    const complete = () => {
        alert("complete")
    }
return(
    <>
        <Title title="ToDoTitle"/>
        <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean finibus enim eget augue luctus malesuada. Etiam ultricies dui eleifend maximus ornare. 
            Duis pharetra lectus a commodo egestas. Vestibulum ut dolor tincidunt, bibendum odio quis, mattis metus. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis condimentum lacus. Nulla pulvinar justo a tincidunt efficitur. Ut posuere dapibus lobortis. 
        </p>
        <Button text="complete" clickHandler={complete} />
    </>    
    )
}

export default Todo; 