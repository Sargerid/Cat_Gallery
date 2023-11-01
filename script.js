const categorySelect = document.getElementById("category");
const getButton = document.getElementById("get-button");
const gallery = document.querySelector(".gallery");
const API_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_Zgubw9jkdyR1cNYfW5xGq9p6CPlVWfOeP9QuHuZ1S2bleJ8lEGjmYWubZS4HozST";

async function Categories() {
  const response = await fetch(API_URL + "/categories?api_key="+API_KEY);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const category = document.createElement("option");
    category.value = data[i].id;
    category.text = data[i].name;
    categorySelect.appendChild(category);
  }
}

Categories();

async function loadPictures() {
  const response = await fetch(API_URL+"/images/search?api_key="+API_KEY+"&category_ids="+categorySelect.value+"&limit=9");
  const data = await response.json();
  gallery.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    const imageLib = document.createElement("img");
    imageLib.src = data[i].url;
    item.appendChild(imageLib);
    gallery.appendChild(item);
  }
}

getButton.addEventListener("click",loadPictures);



