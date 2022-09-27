import data from "../../DATA.json";

const main = () => {
  let restodingElement = "";
  data.restaurants.forEach((resto) => {
    restodingElement += `
      <a class="content" href="#">
          <section class="box">
            <div class="city">
              ${resto.city}
            </div>
            <div class="rating">
              <i class="fa-solid fa-star">&nbsp${resto.rating}</i>
            </div>
            <img src="${resto.pictureId}" alt="${resto.name} Image">
            <h3 class="title">${resto.name}</h3>
            <p class="text-overflow">${resto.description}</p>
        </section>
      </a>
    `;
  });

  document.querySelector(".wrapper").innerHTML = restodingElement;
  document.querySelector(".jumbotron").style.backgroundImage =
    "url('./images/heros/hero-image_2.jpg')";
};

export default main;