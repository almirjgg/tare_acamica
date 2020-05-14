fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });