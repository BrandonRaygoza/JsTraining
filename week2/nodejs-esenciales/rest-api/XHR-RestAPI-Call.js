/* XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.*/


// Set up out HTTP request
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

// onload se ejecuta despues del send
// Esta llamada se ejecuta cuando el send termina, es decir, cuando tengamos una respuesta se ejecuta onload. Por eso es asincrona. 
// Setup out listener to process completed requests
xhr.onload = function(){
    console.log('DONE', xhr.readyState); // readyState will be 4
    // Process our return data
    if(xhr.status >= 200 && xhr.status < 300){
        //what do when request is succesful
        //console.log("success!", xhr);
        let response = JSON.parse(xhr.responseText);    // Es que viene en JSON, lo paso a texto
        response.forEach(element => {
            console.log(`Title: ${element.title} Body: ${element.body}`);
        });
    }else{
        // what do when request fails
        console.log("The request failed!");
    }

    // code that should run regardless of the request status
    console.log("this always runs");
}
// Create and send a GET request
// The first argument is the post type (GET, POST, DELET, PUT, etc)
// The second argument is the endpoint URL
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.send();
console.log("Me ejecuto aunque el send siga esperando por una respuesta");