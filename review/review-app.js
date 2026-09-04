//Import
import { products } from "./Data/dataset.js";
import { product } from "./Components/product.js";
import { showReviews } from "./Components/show-reviews.js";
import { addReview } from "./Components/add-review.js";

//Component codes
let getProduct = products[0];
product.data = getProduct; //The first product in the list

document.getElementById("review-app").innerHTML = product.renderUI() + showReviews.renderUI() + addReview.renderUI();

// Populate the product details and existing reviews when the page loads.
showReviews.data = getProduct.reviews;
showReviews.loadReview();

addReview.addEvent();
