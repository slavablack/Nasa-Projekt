/*
Axios frägt Websiten ab und liefert die Rohdaten
*/
// Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    // handle success

    document.getElementById("title").innerHTML = response.data.title;
    document.getElementById("beschreibung").innerHTML = response.data.explanation;
    document.getElementById("copyright").innerHTML = response.data.copyright;
    document.getElementById("datum").innerHTML = response.data.date;

    document.getElementById("image").src = response.data.hdurl;
    
    
    onsole.log(response.data.hdurl);
    console.log(response.data.title);
    console.log(response.data.explanation);
    console.log(response.data.copyright); 
    console.log(response.data.date);
});