"use strict"

//Menu
const dropdown = document.querySelector(".dropdown-container");

document.addEventListener("click", (e)=>{
  if ((e.target.className == "menu-btn") || 
  (dropdown.classList.contains("show") && e.target.parentElement.classList.contains("dropdown-container"))) {
    dropdown.classList.toggle("show");
  } 
})

//Slideshow
const slides = [
  {
    alt: "Kayan's son Aki graduation ceremony at kindergarten",
    src: "images/tribute_01.jpg",
  }, 
  {
    alt: "Baby Kayan and her mother",
    src: "images/tribute_02.jpg",
  },
  {
    alt: "Kayan and her son Aki with fallen leaves, 2014 Autumn",
    src: "images/tribute_03.jpg",
  },
  {
    alt: "Kayan and her son Aki in sunflower field, 2017 Summer",
    src: "images/tribute_04.jpg",
  },
  {
    alt: "Kayan with her Hong Kong family and her Japanese boss",
    src: "images/tribute_06.jpg",
  },
];
const slideshowWrapper = document.querySelector(".slideshow-container");

for (const slide of slides) {
  const picture = document.createElement("img");
  const description = document.createElement("p");

  picture.setAttribute("src", slide["src"]);
  picture.classList.add("slides");
  slideshowWrapper.append(picture);
  
  description.innerHTML = slide["alt"];
  description.classList.add("slide_description", "hidden");
  slideshowWrapper.append(description);
}

(function slideshow(index = 0) {
  const images = document.querySelectorAll(".slides");
  const descriptions = document.querySelectorAll(".slide_description");
    
  images.forEach((image)=>{
  image.style.display = "none";
  })
  descriptions.forEach((description)=>{
  description.classList.replace("show", "hidden");
  })

  images[index].style.display = "block";
  descriptions[index].classList.replace("hidden", "show");

  index++;

  if (index === images.length) {
    index = 0;
  }

  setTimeout(()=>{
    slideshow(index)
  }, 25000);
})()

//Fading overflow
const expandingBtn = document.querySelector(".expand_button");

document.addEventListener("click", (event)=>{
  if (event.target === expandingBtn) {
    event.target.parentElement.classList.toggle("foldable");
    event.target.classList.toggle("hidding_text");
    event.target.innerHTML = "Show less";
    if (expandingBtn.classList.contains("hidding_text")) {
      event.target.innerHTML = "Read more";
    }
  }
})