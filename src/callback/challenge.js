/*
-instalamos un recurso en la terminal para poder utilizarlo
-js es un lenguaje de programacion que corre del lado del navegador, por eso necesitamos instalar el paquete para poder desarrollar
-/npm i xmlhttprequest
-En JavaScript, la propiedad "status" se utiliza para obtener el estado de una respuesta HTTP en el objeto XMLHttpRequest. Cuando se hace una solicitud HTTP a un servidor web, el servidor devuelve una respuesta que contiene un código de estado que indica si la solicitud se completó correctamente o si se produjo un error.

*/
//llamamos el modulo
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//API en mayusculas porque es un calor que no va a cambiar, nos indica la url de la API
const API = 'https://api.escuelajs.co/api/v1';

//nos permite recibir la url y el callback  , en los argumentos

//el callback es la informacion que nos va a retornar, ya sea la data o el error
function fectchData(urlApi, callback){
    //existen diferentes formas, esta es solo una de ellas de hacer un llamado a una API
    //creamos un ubjeto xhttp una instancia
    let xhttp = new XMLHttpRequest();
    //ahora trabajamos con los elementos que me entrega
    //con open abrimos una coneccion a la API, especificanto el tipo de peticion que vamos a hacer, en este caso"GET(Obtener)"
    //le pasamos la url que va a utilizar "urlApi"
    //le pasamos el valor de true para definir que es asincrona
    xhttp.open('GET', urlApi, true);
    //ahora validamos el estado de la solicitup http con onreadystatechange, que es un evento que se dispara cuando cambia el estado de la solicitud http. La propiedad ‘.readyState’ indica el estado actual de la solicitud. 0 (UNSENT), 1 (OPENED), 2 (HEADERS_RECEIVED), 3 (LOADING) y 4 (DONE). El valor de ‘.readyState’ cambia a medida que la solicitud avanza de un estado a otro.
    //ahora escuchamos los estados de la solicitud para saber cuando esta disponible la informacion.
    //esta es una funcion que vamos a pasar y esta funcion recibe un evento, dentro de esta funcion validamos el tipo de estado en el que se encuentra.

    xhttp.onreadystatechange = function (event) {
        //ahora validamos el estado de la solicitup http
        if (xhttp.readyState === 4){
            //el estatus tambien queremos validarlo, ademas de el estado, y queremos validarlo con el valor 200 (200 OK: la solicitud se completó correctamente)
            //un servidor puede responder con un error, con la informacion o con una redireccion.
            if(xhttp.status === 200){
                //usamos el callback para pasarle 2 valor, el primer elemento es un valor nulo que equivale a la respuesta de un error pero como ya validamos con los 2 if seria null, y el segundo es una transformacion de la informacion de un string a un objeto

                callback(null, JSON.parse(xhttp.response));
            }
            else{
                //ahora creamos un objeto del tipo error, y en su propiedad .message le definimos 'Error' + urlApi , para que nos adjunte la url de la API
                const error = new Error('Error' + urlApi)
                return callback(error, null);
            }
        }
        //definimos que pasa si hay un error en el estado

    }
    //ahora definimos el .send que lo que hace es ejecutar la logica
    xhttp.send();
}

/*
El método send() es un método del objeto XMLHttpRequest en JavaScript que se utiliza para enviar una solicitud HTTP a un servidor. Después de crear una instancia de XMLHttpRequest, se establecen las opciones de la solicitud (como la URL, el método HTTP, los encabezados, etc.) mediante los métodos open() y setRequestHeader(). Luego, se llama al método send() para enviar la solicitud al servidor.

El método send() no tiene argumentos y envía la solicitud al servidor de acuerdo con las opciones establecidas por los métodos open() y setRequestHeader(). Si la solicitud es de tipo GET, los parámetros de la solicitud se incluyen en la URL. Si la solicitud es de tipo POST, los parámetros se envían en el cuerpo de la solicitud.

Es importante tener en cuenta que el método send() es asíncrono, lo que significa que no bloquea el hilo de ejecución principal. En cambio, la respuesta del servidor se maneja mediante el uso de un callback, utilizando el evento onreadystatechange.
*/
