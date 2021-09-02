$( document ).ready(function() {
    let endpoint = "https://jsonplaceholder.typicode.com/posts/50"
    //let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'
    
    $.ajax({
        //url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        type:  'get',
        success: function(result){
            console.log(result);
        }
    });
}); 