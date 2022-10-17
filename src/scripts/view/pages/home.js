import Swal from "sweetalert2";
import ApiRepository from "../../data/api-repository";
import "../../components/loading-indicator";
import "../../components/restaurant-list";

class Home {
  static async render() {
    return `
      <section class="jumbotron">
          <h1 class="jumbotron-title">Welcome to Restoding!</h1>
      </section>
      
      <article id="content" tabindex="0">
          <h2>Explore Restaurant</h2>
          <loading-indicator></loading-indicator>
          <restaurant-list class="wrapper"></restaurant-list>
      </article>
    `;
  }

  static async afterRender() {
    const jumbotronElement = document.querySelector(".jumbotron");
    const loadingElement = document.querySelector("loading-indicator");
    const restaurantListElement = document.querySelector("restaurant-list");

    jumbotronElement.style.backgroundImage =
      "url('./images/heros/hero-image_2.jpg')";

    try {
      const response = await ApiRepository.getRestaurantList();
      restaurantListElement.restaurants = response;
    } catch (message) {
      Swal.fire({
        title: "Something went wrong!",
        text: message,
        icon: "error",
      });
    } finally {
      loadingElement.style.display = "none";
    }
  }
}

export default Home;
