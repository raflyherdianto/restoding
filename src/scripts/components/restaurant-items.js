import CONFIG from "../data/config";

class RestaurantItems extends HTMLElement {
  set restaurantItem(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a class="content" href="#/details/${this.restaurant.id}">
          <section class="box">
          <div class="city">
              ${this.restaurant.city}
            </div>
            <div class="rating">
              <i class="fa-solid fa-star">&nbsp${this.restaurant.rating}</i>
            </div>
            <img src="${CONFIG.BASE_IMAGE_URL}${
                this.restaurant.pictureId
              }" alt="${this.restaurant.name} Image">
            <h3 class="title">${this.restaurant.name}</h3>
            <p class="text-overflow">${this.restaurant.description}</p>
        </section>
      </a>
    `;
  }
}

customElements.define("restaurant-items", RestaurantItems);
