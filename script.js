const url = "https://rickandmortyapi.com/api/character";
const searched = [];

document.getElementById("charSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const idiot = document.getElementById("charInput").value;

  fetch(url)
    .then(function(response)
    {
      return response.json();
    })
    .then(function(js)
    {
      var json = js;
      var found = false;
      for (let j = 0; j < js.info.pages; ++j)
      {
        if (found === true) break;
        for (let i = 0; i < 20; ++i)
        {
          if (json.results[i].name === idiot)
          {
            found = true;
            if (searched.includes(idiot))
            {
              document.getElementById("title").innerHTML = "Already Found!";
            }
            else
            {
              searched.push(idiot);
              var res = json.results[i];
              document.getElementById("title").innerHTML = "Search Another!";

              var charbox = document.createElement('div');
              var charimg = document.createElement('div');
              var chartext = document.createElement('div');

              charbox.id = 'charbox';
              charimg.id = 'charimg';
              chartext.id = 'chartext';

              charimg.innerHTML = '<img src="' + res.image + '"/>';

              var text = '<p><b>Status: </b>' + res.status + '</p>';
              text += '<p><b>Species: </b>' + res.species + '</p>';
              text += '<p><b>Gender: </b>' + res.gender + '</p>';
              text += '<p><b>Last Seen: </b>' + res.location.name + '</p>';
              chartext.innerHTML = text;

              charbox.appendChild(charimg);
              charbox.appendChild(chartext);
              document.body.appendChild(charbox);
              break;
            }
          }
        }
      }
      if (found === false) document.getElementById("title").innerHTML = "I don't have that one :(";
    })
})
