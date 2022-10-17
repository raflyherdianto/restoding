import Swal from "sweetalert2";
import ApiRepository from "../../data/api-repository";
import AddReview from "../../utils/add-review";
import UrlParser from "../../routes/url-parser";
import "../../components/loading-indicator";
import "../../components/restaurant-details";

class Details {
  static async render() {
    return `
            <section class="jumbotron">
                <h1 class="jumbotron-title">Detail Restaurants</h1>
            </section>
            <loading-indicator></loading-indicator>
            <restaurant-details id="content" tabindex="0"></restaurant-details>`;
  }

  static async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jumbotronElement = document.querySelector(".jumbotron");
    const loadingElement = document.querySelector("loading-indicator");
    const restaurantElement = document.querySelector("restaurant-details");

    jumbotronElement.style.backgroundImage =
      "url('./images/heros/hero-image_2.jpg')";

    try {
      const response = await ApiRepository.getRestaurantDetail(url.id);
      restaurantElement.restaurantItem = response;
    } catch (message) {
      restaurantElement.renderError(message);
    } finally {
      loadingElement.style.display = "none";
    }

    const btnSubmit = document.querySelector("#submit-review");
    const nameInput = document.querySelector("#inputName");
    const reviewInput = document.querySelector("#inputReview");

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (nameInput.value === "" || reviewInput.value === "") {
        Swal.fire({
          title: "Something went wrong!",
          text: "No input can't be empty!",
          icon: "error",
        });

        nameInput.value = "";
        reviewInput.value = "";
      } else {
        AddReview(url, nameInput.value, reviewInput.value);
        nameInput.value = "";
        reviewInput.value = "";
      }
    });
  }
}

export default Details;
