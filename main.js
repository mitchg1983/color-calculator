const prompt = require('prompt-sync')();

let choice = prompt('Would you like to COMBINE colors, or DECONSTRUCT them?');

const purple = ('red and blue');
const orange = ('red and yellow');
const green = ('blue and yellow');

if (choice === 'COMBINE') {

    const mix1 = prompt('What is the first color you would like to mix?');
    const mix2 = prompt('What is the second color you would like to mix?');


    if ((mix1 === 'red' && mix2 === 'blue') || (mix1 === 'blue' && mix2 === 'red')) {
        console.log ('Purple');
    }


    if ((mix1 === 'red' && mix2 === 'yellow') || (mix1 === 'yellow' && mix2 === 'red')) {
        console.log ('Orange');
    }


    if ((mix1 === 'yellow' && mix2 === 'blue') || (mix1 === 'blue' && mix2 === 'yellow')) {
        console.log ('Green');
    }

    else if ((mix1 !== 'red' || mix1 !== 'blue' || mix1 !== 'yellow')  ||  (mix2 !== 'red' || mix2 !== 'blue' || mix2 !== 'yellow')) {
        console.log ('Error. Thank you, goodbye.')
    }

}

if (choice === 'DECONSTRUCT') {

    const deColor = prompt('What color would you like to DECONSTRUCT?');

    if ( deColor === 'Purple') {
        console.log (purple);
    }
    
    if ( deColor === 'Orange') {
        console.log (orange);
    }
    
    if ( deColor === 'Green') {
        console.log (green);
    }

    if (deColor !== 'Purple' && deColor !== 'Orange' && deColor !== 'Green') {
        console.log ('Error. Thank you, goodbye.');
    }

}