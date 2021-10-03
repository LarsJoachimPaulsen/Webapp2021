const Button = ({ text, clickHandler }) => (

    <button type="button" name={text} onClick={clickHandler}>{text}</button>
)   

export default Button; 