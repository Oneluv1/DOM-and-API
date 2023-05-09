/*async function getDogData() {
  const username = document.getElementById('usernameGet').value;

  if (!username) {
      alert('Please enter a Dog breed/type');
      return;
  }
  //const endpoint = new URL(`https://swapi.dev/api/films/1/`);
  
  //endpoint.searchParams.set('token', 'YOUR_TOKEN_HERE');
 // const response = await fetch(endpoint, {
    headers: {
    //  "Authorization": "YOUR_TOKEN_HERE"
    }
 // });
  if (response.status === 404){
    alert('Dog breed/type not found');
    return;
  }
  const data = await response.json();
}*/
const drawBlankCalendar = () =>{
  for( let i = 0; i <35; i++){
    const day = document.createElement('p');
    
  }
}
const body = document.body
const div = document.createElement("div")
div.innerHTML = "<fieldset>\
<legend><b> Retrieve Dog Data</legend>\
<input placeholder= Dog-Breed/Type>\<button>Retrieve</button>"

body.append(div)

const Dogs = document.createElement('Dogs')
Dogs.innerHTML = "<h3>Are you a Dog lovers <br> See below different breeds/types of Dogs in every few seconds</h3>"
div.append(Dogs)


function fetchDog(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //const canvas = document.createElement("canvas");
    const dogImage = document.createElement('img');
    dogImage.src = data.message;
    //canvas.width = 200;
    //canvas.height = 150;

    document.body.appendChild(dogImage);
  })
  .catch(e => console.error(e))
}
fetchDog();

var moon = document.getElementById('moon');
moon.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')){
    
  moon.src = "sun-icon.png";
} else{
  moon.src = "moon-icon.png";
}
}

setTimeout(() => {
  document.location.reload();
}, 7000);