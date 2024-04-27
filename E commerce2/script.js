let container = document.getElementById("container");
let inputBox = document.querySelector("#search-products>input");
let searchBtn = document.querySelector("#navbar-search");

let data = [];

// get the data
fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res; // Save the fetched data
    displayData(data);
  });

function displayData(data) {
  container.innerHTML = ""; // Clear the container first
  data.forEach(function (product) {
    let div = document.createElement("div");

    let productImg = document.createElement("img");
    productImg.src = product.image;

    let title = document.createElement("p");
    title.innerText = product.title;

    let price = document.createElement("p");
    price.innerText = "INR : " + product.price;

    div.append(productImg, title, price);
    container.append(div);
  });
}

function searchData() {
  let value = inputBox.value.toLowerCase();
  let filteredData = data.filter(function (product) {
    return product.title.toLowerCase().includes(value); // Check if the title includes the search query
  });

  if (filteredData.length > 0) {
    displayData(filteredData);
  } else {
    container.innerHTML = "<h2>Products not found...</h2>";
  }
}

searchBtn.addEventListener("click", searchData);
