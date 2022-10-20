/* eslint-disable */
import Swal from "sweetalert2";
import LocalData from "../../data/local-data";
import "../../components/restaurant-list";

class Favorites {
  static async render() {
    return `
        <section class="jumbotron">
        <picture>
            <source media="(min-width:601px)" srcset="./images/hero-image_2-large.jpg">
            <source media="(max-width:600px)" srcset="./images/hero-image_2-small.jpg">
            <img src="./images/hero-image_2-large.jpg" alt="Heroes Image">
        </picture>
          <h1 class="jumbotron-title">Your Favorite Restaurants</h1>
          <h2 id="emptyData">There are no favorite restaurants yet</h2>
        </section>
        <restaurant-list class="wrapper" id="content" tabindex="0"></restaurant-list>`;
  }

  static async afterRender() {
    // const jumbotronElement = document.querySelector(".jumbotron");
    const restaurantListElement = document.querySelector("restaurant-list");
    const favoriteData = await LocalData.getAllSaved();
    const emptyCaption = document.querySelector('#emptyData');

    // jumbotronElement.style.backgroundImage =
    //   "url('./images/heros/hero-image_2.jpg')";

    if (favoriteData.length == 0) {
      Swal.fire({
        title: "There are no favorite restaurants yet!",
        icon: "warning",
      });
    } 
    
    if (favoriteData.length > 0){
      emptyCaption.style.display = 'none';
    }

    restaurantListElement.restaurants = favoriteData;
  }
}

export default Favorites;
