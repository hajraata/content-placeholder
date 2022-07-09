const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format" alt="laptop"/>';
  title.innerHTML = "Lorem ipsum dolor sit";
  description.innerHTML =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam voluptates repellat autem accusamus non";
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="man" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Sep 15, 1985";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
