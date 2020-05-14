
fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(responsee) {
        console.log(responsee);
    });