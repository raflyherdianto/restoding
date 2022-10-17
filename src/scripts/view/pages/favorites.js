/* eslint-disable */
import Swal from "sweetalert2";
import LocalData from "../../data/local-data";
import "../../components/restaurant-list";

class Favorites {
  static async render() {
    return `
        <section class="jumbotron">
          <h1 class="jumbotron-title">Your Favorite Restaurants</h1>
        </section>
        <restaurant-list class="wrapper" id="content" tabindex="0"></restaurant-list>`;
  }

  static async afterRender() {
    const jumbotronElement = document.querySelector(".jumbotron");
    const restaurantListElement = document.querySelector("restaurant-list");
    const favoriteData = await LocalData.getAllSaved();

    jumbotronElement.style.backgroundImage =
      "url('./images/heros/hero-image_2.jpg')";

    if (favoriteData.length == 0) {
      Swal.fire({
        title: "There are no favorite restaurants yet!",
        icon: "warning",
      });
    }

    restaurantListElement.restaurants = favoriteData;
  }
}

export default Favorites;
