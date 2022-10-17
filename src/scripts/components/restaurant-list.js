import "./restaurant-items";

class RestaurantList extends HTMLElement {
  set restaurants(list) {
    this.restaurantList = list;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.restaurantList.forEach((resto) => {
      const restaurantElement = document.createElement("restaurant-items");
      restaurantElement.restaurantItem = resto;

      this.appendChild(restaurantElement);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
