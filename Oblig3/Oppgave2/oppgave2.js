import { users } from './util';

// TODO: Hent HTML #id med getElementById
let name = document.getElementById('name'); 
let age = document.getElementById('age'); 
let filterBtn = document.getElementById('filter'); 
let users = document.getElementById('users'); 
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const viewUsers = () =>{

}
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const findUsers = () =>{

}
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const updateUI = () =>{

}
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
name.addEventListener('keypress', findUsers); 
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener('click', updateUI); 