import data from "../../DATA.json";

const main = () => {
  let restodingElement = "";

  data.restaurants.forEach((resto) => {
    restodingElement += `
      <a class="w3-col l3 m6 w3-margin-bottom resto-card" href="#">
      <div class="w3-display-container w3-card card">
        <div class="w3-display-topleft w3-black w3-padding card-rate">
            <i class="fa-solid fa-star">&nbsp${resto.rating}</i>
        </div>
        <img class="card-image" src="${resto.pictureId}" alt="${resto.name}" style="width:100%">
        <div class="card-content">
          <h3>${resto.name}</h3>
          <p class="w3-opacity">${resto.city}</p>
          <p class="desc">${resto.description}</p>
        </div>
      </div>
    </a>
      `;
  });

  document.querySelector(".w3-row-padding").innerHTML = restodingElement;
};

export default main;