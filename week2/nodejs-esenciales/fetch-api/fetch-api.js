
// Si no se especifica el metodo, por default es GET.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos",{
    method: "POST",
    body: JSON.stringify({
        title: "Was the dishes",
        completed: false
        // name: "Taylor",
        // surname: "Swift"
    }),
    headers:{
        "Content-type":"application/json"
    }
}).then(response => response.json()).then(json => console.log(json));

async function getUser(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();

    return data;
}

getUser(1).then(data => console.log(data));