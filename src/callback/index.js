//callback
function suma(num1, num2){
    return num1 + num2;
}

function calcular(num1, num2, callback){
    return callback(num1,num2);
}
console.log(calcular(8, 2, suma));

//setTimeout

setTimeout(function(){console.log('Hola JavaScript');},2000);

//useing setTImeout as a callback
function greeting(name){
    console.log(`Hoy saludamos a: ${name}`)
};
setTimeout(greeting, 2000, 'Tigrisha');


export function execCallback(callback) {
    windows.setTimeout(callback, 2000)
  };


/*be careful, suma doesn't require a "()"
- it's not require use the name callback, you can change the name
- setTimeout receive a function, a time and a argument, but we aren't using a argument
- setTimeout, it's a callback with a function that we introduce it
*/
