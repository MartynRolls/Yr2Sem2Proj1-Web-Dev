//Component codes
export const showReviews = {

  //--------------------------------------------------
  //Data properties
  data: [],

  //--------------------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //HTML view
    let ui = `
      <!-- Reviews -->
      <div class="card shadow-sm my-2 container">
        <div class="card-header">
          <h4 class="mb-0">Customer Reviews</h4>
        </div>
        <div class="card-body">
          <div id="reviewsContainer"></div>
        </div>
      </div>
    `;
    //Return HTML view
    return ui;
  },

  //Functions
  loadReview() {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";
    // Rebuild the list so newly added reviews appear immediately.
    this.data.forEach(review => {
      // Display filled stars for the rating and empty stars for the remainder.
      const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      container.innerHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5>${review.user}</h5>
              <small class="text-muted">${review.date}</small>
            </div>
            <div class="text-warning mb-2">${stars}</div>
            <p class="mb-0">${review.comment}</p>
          </div>
        </div>
      `;
    });
  }
}
