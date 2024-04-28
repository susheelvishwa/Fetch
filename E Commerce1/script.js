let container = document.getElementById("container");

let data = [];

// get the data
fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    displayData(res);
  });

function displayData(data) {
  data.forEach(function (product) {
    let div = document.createElement("div");

    let productImg = document.createElement("img");
    productImg.src = product.image;

    let title = document.createElement("p");
    title.innerText = product.title;

    let price = document.createElement("p");
    price.innerText = "INR : " + product.price;

    let addtoCard = document.createElement("button");
    addtoCard.textContent = `Add to cart`;
      addtoCard.addEventListener("click", function () {
        addfun(ele,i)
    });

    div.append(productImg, title, price, addtoCard);

    container.append(div);
  });
}


