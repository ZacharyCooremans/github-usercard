import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get("https://api.github.com/users/ZacharyCooremans")
.then()
.catch()
const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

const obj = axios.get('https://api.github.com/users/ZacharyCooremans');
console.log(obj)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
followersArray.forEach(person =>{
  axios.get(`https://api.github.com/users/${person}`)
  .then((res) =>{
    console.log(res)
    cardsPoint.append(cardMaker(res.data))
  })
  .catch((err) =>{
    console.log(err)
  })
});
axios
.get("https://api.github.com/users/ZacharyCooremans")
.then((res) => {
  console.log('RESPONSE: \n \n', res)
  console.log('res.data: \n \n', res.data)
  const items = res.data;
  const stuff = cardMaker(items)
  cardsPoint.append(stuff)
  
  //console.log('THIS IS ITEM', items)
  
})
.catch((err) => {
  //debugger;
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = ["tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell"];

const cardsPoint = document.querySelector('.cards')
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker (obj) {

  // instantiating the elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const pUser = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const a = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  //setting class name, attributes
  card.classList = 'card';
  cardInfo.classList = 'card-info';
  h3.classList = 'name';
  pUser.classList = 'username';
  a.setAttribute ('href', obj['html_url']);
  a.innerHTML = obj['html_obj'];
  //pProfile
  img.src = obj['avatar_url'];
  h3.textContent = obj['login'];
  pUser.textContent = `HIIIII ${obj['name']}`;
  pLocation.textContent = `Location ${obj['location']}`;
  pProfile.textContent = 'Profile ';
  a.textContent = obj['html_url']
  pFollowers.textContent = `Followers ${obj['followers']}`;
  pFollowing.textContent = `Following ${obj['following']}`;
  pBio.textContent = `Bio ${obj['bio']}`;
  console.log('THIS TEXT', a)
  //url = <a href = 'https://github.com/ZacharyCooremans'>THIS IS A LINK</a>

  // setting hierarchy
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(pUser);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  pProfile.appendChild(a);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);

  return card
}
//cardsPoint.append(cardMaker(obj))
//console.log('This is object', stuff)
//console.log(cardMaker(items))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
