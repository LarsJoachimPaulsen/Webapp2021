//import './styles.css';

// TODO: Bruk getElementById til å hente HTML med #id
// TODO: Bruk querySelector til å hente knappen
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [15, 10, 30, 40, 23, 93];

const getGuess = () => {

  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = document.querySelectorAll('input'); 

  // TODO: Bruk Array.from() for å gjøre om verdiene du får til "ekte" liste
  // TODO: Bruk .map for å hente ut verdiene i input feltene og returner denne
  return Array.from(answers).map((answer) => answer.value);
  
};

const checkNumberSeq = () => {
  // TODO: Lag logikken som sjekker om du har sortert riktig
  // Tips: Bruk getGuess() for å få "det som er gjettet"
  
  if(getGuess().join('') === numbers.sort().join('')){
      console.log('sortert riktig'); 
  }else{
      console.log('sortert feil')
  }

  // Tips: Bruk .sort() .join()
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres

  for(const number of numbers){
      const UI = `<li><input type="number"></li>` 
      guessUl.innerHTML += UI; 
  } 
 
};

const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  
  for(const number of numbers){
        const UI = `<li>${number}</li>` 
        numbersUl.innerHTML += UI; 
  }

};

const createUI = () => {
  // TODO: Bygg hele UI ved hjelp av UI funksjonene
    addInputUI();
    addNumbersUI();

};

createUI();

button.addEventListener('click', checkNumberSeq);

// TODO: Lytt til 'click'-event og trigg validateNumberSeq ved klikk