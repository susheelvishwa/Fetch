let container = document.getElementById("container");

let data = [];

// get the data
fetch("https://reqres.in/api/users")
//fetch is a promise and promises takes time
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res.data;
    console.log("data:", data);
    displayData(data);
  });

function displayData(data) {
  data.forEach(function (user) {
    let div = document.createElement("div");

    let avatar = document.createElement("img");

    avatar.src = user.avatar;

    let name = document.createElement("p");

    name.innerText = `${user.first_name} ${user.last_name}`;

    let email = document.createElement("p");

    email.innerText = user.email;

    div.append(avatar, name, email);

    container.appendChild(div);
  });
}
