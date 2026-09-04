//Import
import { showReviews } from "./show-reviews.js";

//Component codes
export const addReview = {

  //--------------------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //HTML view
    let ui = `
      <!-- Add Review -->
      <div class="card shadow-sm my-2 container">
        <div class="p-2">
          <h4 class="mb-0">Add Review</h4>
        </div>
        <div class="card-body">
          <form id="reviewForm">
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input type="text" id="reviewUser" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Rating</label>
              <select id="reviewRating" class="form-select" required>
                  <option value="">Select Rating</option>
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Comment</label>
              <textarea id="reviewComment" class="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit Review</button>
          </form>
        </div>
      </div>
    `;
    //Return HTML view
    return ui;
  },

  //Functions
  addEvent() {
    // Add Review
    document.getElementById("reviewForm").addEventListener("submit", (e) => {
      e.preventDefault();
      // Read the submitted values from the form controls.
      const user = document.getElementById("reviewUser").value;
      const rating = parseInt(document.getElementById("reviewRating").value);
      const comment = document.getElementById("reviewComment").value;
      const newReview = {
        user,
        rating,
        comment,
        date: new Date().toISOString().split("T")[0]
      };
      // Add the newest review to the beginning of the review list.
      showReviews.data.unshift(newReview);
      //Load updated reviews
      showReviews.loadReview();
      alert("Review added successfully!");
    });
  }
}
