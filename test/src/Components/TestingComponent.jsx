import react, { useState } from 'react'; 

const TestingComponent = () => {

    const [click, setClick] = useState(0)

    const addClick = () => {
        setClick(click+1); 
    }

    const removeClick = () => {
        setClick(click-1)
    }

    return (

        <>
            <h1>{click}</h1>
            <button onClick={addClick}>Legg til klikk</button>
            <button onClick={removeClick}> Fjern klikk </button>
        </>
    )

}

export default TestingComponent