import axios from "axios";

const followersArray = [
  "rkshockey",
  "BrandonWorobi",
  "ShariqAli-Dev",
  "Jie-chelchel",
  "JamariaSims",
];

const cards = document.querySelector(".cards");

// my card
axios
  .get(`https://api.github.com/users/SelfCheckout94`)
  .then((res) => {
    cards.appendChild(gitHub(res.data));
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("nice"));

// followers cards
followersArray.forEach((user) =>
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      cards.appendChild(gitHub(res.data));
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("nice"))
);

function gitHub({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  const card = document.createElement("div");
  const imgURL = document.createElement("img");
  const cardInfo = document.createElement("div");
  const realName = document.createElement("h3");
  const username = document.createElement("p");
  const locale = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  realName.classList.add("name");
  username.classList.add("username");

  imgURL.src = `${avatar_url}`;
  realName.textContent = `${name}`;
  username.textContent = `${login}`;
  locale.textContent = `Location: ${location}`;
  url.href = `${html_url}`;
  profile.textContent = `Profile: ${url}`;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;

  card.appendChild(imgURL);
  card.appendChild(cardInfo);
  cardInfo.appendChild(realName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locale);
  cardInfo.appendChild(profile);
  profile.appendChild(url);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return card;
}
