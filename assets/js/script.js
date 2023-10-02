var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var cors = "https://cors-anywhere.herokuapp.com/"
  var requestUrl = 
  cors + 
  'https://captaincoaster.com/api/coasters?page=1';

  fetch(requestUrl, {
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "32b3f219-979c-40f8-b92b-6eec5acab9f8"
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
     
     
    });
}

fetchButton.addEventListener('click', getApi);
