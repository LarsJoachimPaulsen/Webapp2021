const Button = ({ text, clickHandler, index=null }) => (

    <button type="button" name={text} onClick={()=>clickHandler(index)}>{text}</button>
)   

export default Button; 
