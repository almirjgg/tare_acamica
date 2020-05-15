
fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        console.log(response.author)
        document.getElementById("quote").innerText = response.quote;
        document.getElementById("autor").innerText = response.author;
        
    });