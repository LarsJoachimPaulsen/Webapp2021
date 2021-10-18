import {render, screen, fireEvent} from '@testing-library/react'
import TestingComponent from "./TestingComponent";


it('should start the counter at 0', () => {

    render(<TestingComponent/>);

    const counter = document.querySelector('h1'); 

    expect(counter).toHaveTextContent('0');

})

it('should increase counter when increase counter button is pressed', () => {

    render(<TestingComponent />)

    const counter = document.querySelector('h1');

    fireEvent.click(screen.getByText('Legg til klikk')); 

    expect(counter).toHaveTextContent('1'); 

}); 

it('should decrease counter when decrease counter button is pressed', () => {

    render(<TestingComponent/>)

    const counter = document.querySelector('h1'); 
    fireEvent.click(screen.getByText('Fjern klikk')); 

    expect(counter).toHaveTextContent('-1');

});
