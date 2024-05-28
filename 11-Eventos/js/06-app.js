// Event Bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const title = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en card");
});

infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});

title.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo");
});
