let movies = [
  {
    name: "Pop Kaun?",
    des:
      "Sahil Trivedi is all set to marry his girlfriend, Pihu, but his life takes a strange turn when he encounters a bitter truth and has one question, 'Who is my pop?'",
    image: "images/pk.png"
  },
  {
    name: "The Night Manager",
    des:
      "Shaan Sengupta, the night manager of Dhaka's Hotel Orient Pearl, gets embroiled in the arms-dealing world of billionaire Shelly Rungta for going beyond duty for a special guest.",
    image: "images/nm.png"
  },
  {
    name: "Taaza Khabar",
    des:
      "Vasya's slum-dog life is an uphill struggle. His only respite, and lady love, is Madhu, a sex worker. One day, his kindness gets rewarded when he receives an old lady's blessings",
    image: "images/tk.png"
  },
  {
    name: "Black Panther: Wakanda Forever",
    des:
      "protect their nation from intervening world powers after the death of beloved King T’Challa adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/wakanda.png"
  },
  {
    name: "Devon Ke Dev... Mahadev",
    des:
      "He is supreme being and destroyer of evil. Witness lord shiva's story, his avatar ,and union that shaped the universe ",
    image: "images/mahadev.png"
  }
  /// and so on
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting  image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);
